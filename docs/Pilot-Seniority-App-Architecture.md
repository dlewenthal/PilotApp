# Delta Pilot Seniority Application - System Architecture

**Version**: 2.0  
**Date**: September 9, 2025  
**Status**: Production Migration in Progress  

---

## Executive Summary

The Delta Pilot Seniority Application is a comprehensive web-based system that provides Delta Air Lines pilots with real-time access to their seniority information, pay scales, and career progression data. The application has successfully migrated from a local SQLite database to a cloud-based PostgreSQL infrastructure and is being prepared for public deployment with user authentication.

## Current System Status

### ✅ **Completed Migrations**
- **Database Migration**: SQLite → AWS RDS PostgreSQL (206,301 records)
- **Schema Deployment**: Full database schema with all relationships
- **Data Verification**: 100% data integrity confirmed
- **Cost Management**: AWS Free Tier optimized with stop/start controls

### 🚀 **Production Deployment Plan**
- **Phase 1**: Public web application (PWA) with Firebase Authentication
- **Phase 2**: Mobile app development (React Native)
- **Target Timeline**: 3-6 months to public launch

---

## System Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Mobile Apps   │    │   Web Frontend   │    │  Admin Panel    │
│  (Future v2.0)  │    │   React + PWA    │    │   (Future)      │
│                 │    │                  │    │                 │
└─────────┬───────┘    └─────────┬────────┘    └─────────┬───────┘
          │                      │                       │
          └──────────────────────┼───────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │   Authentication        │
                    │   Firebase Auth         │
                    │   (Email/Password)      │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │     API Gateway         │
                    │   Node.js + Express     │
                    │   Hosted on Railway     │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │     Database            │
                    │  PostgreSQL (AWS RDS)   │
                    │    206,301 records      │
                    └─────────────────────────┘
```

---

## Database Architecture

### **Primary Database: AWS RDS PostgreSQL**
- **Instance**: `pilot-seniority-db` (db.t3.micro)
- **Location**: us-west-1 (N. California)
- **Storage**: 20GB encrypted SSD
- **Backup**: 7-day retention
- **Cost**: Free Tier until September 2026

### **Data Model Overview**

```sql
-- Core Entities
Pilot (19,273 records)
├── empNumber (Primary Key)
├── name, pilotHireDate, scheduledRetireDate
└── Relationships to SenioritySnapshot

SenioritySnapshot (186,613 records)
├── seniorityNumber, category, reportDate
├── baseCode, fleetCode, positionCode
├── Parsed: baseCity, fleetName, positionName
└── Links to Pilot records

Aircraft (17 records)
├── aircraftCode, aircraftName, aircraftType
├── payCategory for compensation linking
└── Links to PayRate records

PayScale & PayRate (397 records)
├── Contract-based pay scales
├── Position and years-of-service rates
└── Historical pay progression data

-- Authentication (Future)
UserAccounts
├── Links pilot empNumber to auth system
├── Email, verification, preferences
└── Audit and security logging
```

### **Key Relationships**
- **One Pilot** → **Many SenioritySnapshots** (historical tracking)
- **One Aircraft** → **Many PayRates** (position/experience levels)
- **One PayScale** → **Many PayRates** (contract periods)

---

## Application Layers

### **1. Presentation Layer**
- **Technology**: React.js with modern hooks
- **Components**: 
  - `PilotSeniorityLookup.js` - Main search interface
  - `WidgetView.js` - Compact seniority display
  - `SystemSnapshot.js` - Historical data visualization
- **Styling**: Custom CSS with responsive design
- **PWA Features**: Offline capability, installable, push notifications

### **2. Authentication Layer** (In Development)
- **Provider**: Firebase Authentication
- **Methods**: Email/Password with email verification
- **Security**: JWT tokens, session management
- **User Flow**:
  1. Pilot registers with employee ID + email
  2. Email verification required
  3. System links to existing pilot data
  4. Personalized dashboard access

### **3. API Layer**
- **Technology**: Node.js + Express.js
- **ORM**: Prisma (type-safe database access)
- **Key Endpoints**:
  ```
  GET /api/pilots/search?name={name}     - Search pilots
  GET /api/pilots/{id}/seniority         - Detailed seniority
  GET /api/seniority-ranges              - Position ranges
  GET /api/pay-rates                     - Current pay scales
  ```
- **Authentication**: JWT middleware (future)
- **Rate Limiting**: Planned for production

### **4. Data Access Layer**
- **ORM**: Prisma Client (v6.14.0)
- **Connection Pooling**: Built-in Prisma pooling
- **Caching**: Application-level caching planned
- **Backup Strategy**: AWS RDS automated backups

---

## Deployment Architecture

### **Current Development**
```
Local Development:
├── Frontend: http://localhost:3000 (React dev server)
├── Backend: http://localhost:3001 (Node.js/Express)
└── Database: AWS RDS PostgreSQL (cloud)
```

### **Production Target (Option B - PWA)**
```
Production Environment:
├── Frontend: Vercel (CDN + React build)
├── Backend: Railway (Node.js container)
├── Database: AWS RDS PostgreSQL (existing)
├── Auth: Firebase Authentication
├── Domain: Custom domain (TBD)
└── SSL: Automatic (Vercel + Railway)
```

### **Future Expansion (Option A - Native)**
```
Enhanced Production:
├── Web: React PWA (existing)
├── iOS: React Native app (App Store)
├── Android: React Native app (Google Play)
├── Backend: AWS Lambda + API Gateway
├── Auth: AWS Cognito or Auth0
└── Monitoring: Comprehensive analytics
```

---

## Security Architecture

### **Current Security Measures**
- ✅ **Database Encryption**: AWS RDS encryption at rest
- ✅ **Network Security**: VPC security groups
- ✅ **Access Control**: Database user credentials
- ✅ **Backup Security**: Encrypted backups

### **Production Security (Planned)**
- 🔄 **Authentication**: Multi-factor authentication
- 🔄 **Authorization**: Role-based access (Pilot/Admin)
- 🔄 **API Security**: Rate limiting, CORS, HTTPS only
- 🔄 **Data Privacy**: GDPR compliance, audit logging
- 🔄 **Session Management**: Secure JWT handling

### **Aviation-Specific Considerations**
- **Data Sensitivity**: Seniority information is employment-sensitive
- **User Verification**: Employee ID validation against pilot roster
- **Audit Requirements**: Track access to seniority data
- **Compliance**: Potential union or company policy requirements

---

## Technology Stack

### **Frontend Technologies**
```
React 19.1.1
├── Create React App (build system)
├── Custom CSS (responsive design)
├── Fetch API (HTTP client)
└── PWA Features (service worker, manifest)
```

### **Backend Technologies**
```
Node.js 20.18.1
├── Express.js 4.21.2 (web framework)
├── Prisma 6.14.0 (ORM)
├── CORS 2.8.5 (cross-origin requests)
└── CSV-Parser 3.2.0 (data import)
```

### **Database Technologies**
```
PostgreSQL 15.8 (AWS RDS)
├── 20GB SSD storage
├── Automated backups
├── Performance monitoring
└── Connection pooling
```

### **Infrastructure**
```
AWS Services:
├── RDS PostgreSQL (database)
├── IAM (access management)
└── CloudWatch (monitoring)

Development Tools:
├── Git/GitHub (version control)
├── Claude Code (AI development)
└── npm (package management)
```

---

## Cost Analysis

### **Current Costs (Free Tier)**
- **Database**: $0/month (until Sept 2026)
- **Development**: $0/month
- **Total**: $0/month

### **Production Costs (Option B - PWA)**
- **Frontend (Vercel)**: $0/month
- **Backend (Railway)**: $5-10/month
- **Database (AWS RDS)**: $0-15/month*
- **Authentication (Firebase)**: $0/month (up to 10K users)
- **Domain**: $15/year
- **Total**: $5-25/month + domain

*Free until Sept 2026, then $15/month for 24/7 operation

### **Cost Optimization Strategies**
- **Database Auto-Stop**: Save 70% on compute costs
- **Usage-Based Scaling**: Pay only for active usage
- **Free Tier Maximum**: Optimize within AWS limits

---

## Performance Characteristics

### **Current Performance**
- **Database Size**: 33MB (206,301 records)
- **Query Response**: <100ms for pilot searches
- **Concurrent Users**: Tested for single-user (SQLite legacy)
- **Data Loading**: Full pilot dataset in memory-efficient chunks

### **Production Targets**
- **Response Time**: <200ms for API calls
- **Concurrent Users**: 100+ simultaneous pilot searches
- **Uptime**: 99.9% availability target
- **Mobile Performance**: <3s load time on 3G

---

## Data Migration Strategy

### **Completed Migration (SQLite → PostgreSQL)**
```
Migration Process:
1. ✅ Created AWS RDS PostgreSQL instance
2. ✅ Updated Prisma schema (sqlite → postgresql)
3. ✅ Exported 206,301 records from SQLite
4. ✅ Imported data in batches with type conversion
5. ✅ Verified 100% data integrity
6. ✅ Implemented cost management tools
```

### **Migration Scripts Created**
- `export-sqlite-direct.js` - Direct SQLite data export
- `import-postgresql-fixed.js` - Batch import with type conversion
- `rds-control.sh` - Database start/stop cost management
- `cost-calculator.js` - Cost monitoring and projection

---

## Risk Assessment & Mitigation

### **Technical Risks**
- **Database Costs**: Mitigated by cost monitoring + auto-stop scripts
- **Scalability**: Addressed by cloud infrastructure choice
- **Data Loss**: Mitigated by automated backups + migration scripts
- **Performance**: Load testing planned before public launch

### **Business Risks**
- **User Adoption**: Starting with PWA for low-cost validation
- **Competition**: Unique focus on Delta pilots with comprehensive data
- **Compliance**: Early engagement with stakeholders planned

### **Operational Risks**
- **Maintenance**: Automated deployment pipeline planned
- **Monitoring**: CloudWatch + application monitoring setup
- **Support**: Documentation and user guides in development

---

## Development Roadmap

### **Phase 1: PWA Launch (Months 1-3)**
- ✅ Database migration complete
- 🔄 Firebase authentication setup
- 🔄 User registration and login system
- 🔄 Pilot-specific dashboards
- 🔄 Vercel deployment
- 🔄 Railway API hosting
- 🔄 PWA features (offline, installable)

### **Phase 2: Enhancement (Months 4-6)**
- User feedback integration
- Mobile responsive improvements
- Performance optimization
- Analytics and monitoring
- Custom domain setup

### **Phase 3: Mobile Native (Months 7-12)**
- React Native development
- App store preparation
- Enhanced push notifications
- Offline synchronization
- Advanced user features

---

## Monitoring & Analytics

### **Current Monitoring**
- AWS CloudWatch (database metrics)
- Manual cost tracking
- Basic error logging

### **Production Monitoring (Planned)**
- User authentication metrics
- API response times
- Database performance
- User engagement analytics
- Error tracking (Sentry planned)
- Cost monitoring alerts

---

## Backup & Recovery

### **Database Backup**
- **Automated**: AWS RDS 7-day backup retention
- **Manual**: Migration scripts serve as data backup
- **Testing**: Recovery procedures tested during migration

### **Application Backup**
- **Source Code**: GitHub repository with full history
- **Configuration**: Environment templates in repository
- **Documentation**: Architecture docs and runbooks

### **Recovery Procedures**
- **Database**: Point-in-time recovery available
- **Application**: Automated redeployment from GitHub
- **Rollback**: Git-based version rollback capability

---

## Compliance & Legal Considerations

### **Data Protection**
- Employee seniority data (sensitive but not personal health info)
- Email addresses for authentication (standard business data)
- Access logging for audit purposes

### **Terms of Service** (Required for Production)
- User responsibilities and acceptable use
- Data retention and deletion policies
- Disclaimer of employment-related decisions

### **Privacy Policy** (Required for Production)
- Data collection and usage disclosure
- Third-party service integration (Firebase)
- User rights and data portability

---

## Support & Documentation

### **User Documentation** (In Development)
- Pilot registration guide
- Seniority data interpretation
- Mobile app usage instructions
- FAQ for common questions

### **Technical Documentation**
- ✅ System architecture (this document)
- API documentation (in development)
- Deployment runbooks (in development)
- Database schema documentation

### **Support Strategy**
- Email support for pilot inquiries
- FAQ and self-service resources
- Escalation procedures for technical issues

---

## Conclusion

The Delta Pilot Seniority Application represents a successful evolution from a local development tool to a production-ready cloud application. The migration to PostgreSQL provides the foundation for multi-user access, while the planned authentication system will enable personalized pilot experiences.

The chosen architecture balances cost-effectiveness with scalability, allowing for organic growth from a PWA to full native mobile applications as user demand and revenue justify the investment.

Key success factors:
- ✅ **Solid Data Foundation**: 206K+ records successfully migrated
- ✅ **Cost-Effective Infrastructure**: Free tier maximization with growth path
- ✅ **Modern Technology Stack**: React, Node.js, PostgreSQL, Firebase
- ✅ **Deployment Ready**: GitHub integration for automated deployments

The system is positioned for a successful public launch with clear expansion opportunities based on user feedback and business growth.

---

**Document Prepared By**: Claude Code AI Assistant  
**Last Updated**: September 9, 2025  
**Next Review**: Upon Phase 1 completion