# Seniority Data Import Reference Guide

## Overview
This document provides step-by-step instructions for importing Delta Airlines seniority CSV files into the pilot management database. It includes lessons learned from troubleshooting the February 2025 import issues and ensures consistent, reliable imports going forward.

## File Structure Expected
All seniority files should follow this format:
```
Line 1: Title row (e.g., "Seniority List 01FEB2025,,,,")
Line 2: Header row: "SENIORITY_NBR,Emp_Nbr,Name,Category,Pilot_Hire_Date,Scheduled_Retire_Date"
Line 3+: Data rows with pilot information
```

## Common Data Quality Issues & Solutions

### 1. Empty Category Fields
**Issue**: New hires often have blank category fields (no aircraft/position assigned yet)
**Solution**: Enhanced category parser automatically assigns "UNASSIGNED" values
- `baseCode: "UNASSIGNED"` 
- `baseCity: "Unassigned"`
- `fleetName: "Unassigned"`
- `positionName: "Unassigned"`

### 2. Duplicate Employee Numbers
**Issue**: Same employee appears multiple times in one file (different seniority positions)
**Solution**: Import logic keeps first occurrence, skips duplicates with logging
- Example: Employee 0855157 appears at seniority #13605 and #99999
- Result: Import #13605, skip #99999, log "Duplicate employee 0855157"

### 3. Placeholder Seniority Numbers
**Issue**: Special seniority numbers like #99999 indicate pending assignments
**Solution**: Flag with `isPlaceholder: true` for separate handling
- Numbers > 90000 are considered placeholders
- Allows filtering in reports/analysis

### 4. Null Retirement Dates
**Issue**: Some pilots have null `scheduledRetireDate` causing `isRetired` field errors
**Solution**: Safe boolean evaluation
```javascript
const isRetired = scheduledRetireDate ? scheduledRetireDate < new Date() : false;
```

## Import Process Steps

### Step 1: Verify Prerequisites
```bash
# Ensure schema is up to date
npx prisma db push
npx prisma generate
```

### Step 2: Use Robust Importer
Always use `/src/robustDataImporter.js` - it handles all edge cases:
```bash
node src/robustDataImporter.js
```

### Step 3: Verify Import Results
Check import success with:
```javascript
const totalCount = await prisma.senioritySnapshot.count({
  where: { reportDate: new Date('YYYY-MM-DD') }
});

const unassignedCount = await prisma.senioritySnapshot.count({
  where: { 
    reportDate: new Date('YYYY-MM-DD'),
    baseCode: 'UNASSIGNED'
  }
});

console.log(`Imported: ${totalCount}, Unassigned: ${unassignedCount}`);
```

## Database Schema Requirements

### Core Tables
- `Pilot`: Master pilot information
- `SenioritySnapshot`: Time-stamped seniority data

### Required Fields in SenioritySnapshot
```prisma
model SenioritySnapshot {
  id                    Int       @id @default(autoincrement())
  seniorityNumber       Int
  category              String
  reportDate            DateTime
  baseCode              String
  fleetCode             String 
  positionCode          String
  baseCity              String
  fleetName             String
  positionName          String
  isPlaceholder         Boolean   @default(false)  // Important for new employee handling
  pilotId               Int
  pilot                 Pilot     @relation(fields: [pilotId], references: [id])
  createdAt             DateTime  @default(now())
  
  @@unique([pilotId, reportDate])
  @@index([reportDate])
  @@index([baseCode, fleetCode, positionCode])
  @@index([reportDate, baseCode, fleetCode, positionCode])
}
```

## File-Specific Handling

### Standard Files (Most files)
- Expect 2-5 records to fail due to header/footer variations
- Missing records typically: malformed lines, empty rows
- Success rate: ~99.97%

### Problem Files (Like February 2025)
- May have 50+ records with empty categories
- Possible duplicate employees
- Special seniority numbering
- Success rate with robust importer: ~100%

## Import Validation

### Expected Success Metrics
```bash
# Run analysis after import
node countAllSourceRecords.js

# Expected output:
# Success rate: >99.5%
# Missing records: <1% of total
# Unassigned categories: Varies by file (0-50 typical)
```

### Red Flags to Investigate
- Success rate < 99%
- Missing records > 100 for a single file
- No unassigned categories when expected
- Duplicate constraint errors

## Troubleshooting Guide

### Issue: "isRetired must not be null"
**Cause**: Null retirement dates in source data
**Fix**: Already handled in robust importer with safe boolean evaluation

### Issue: "Unique constraint violation"
**Cause**: Duplicate pilots for same date
**Fix**: Robust importer automatically handles duplicates

### Issue: Large number of missing records
**Steps**:
1. Check file structure (verify header row location)
2. Look for encoding issues (Windows vs Unix line endings)
3. Check for empty category fields
4. Run test with `/testEnhancedImport.js` on problematic sections

### Issue: Category parsing failures
**Check**: `/src/categoryParser.js` supports the airport/fleet codes in your file
**Add new codes** to the mapping objects if needed

## Quick Commands Reference

```bash
# Full import of all files
node src/robustDataImporter.js

# Test specific file sections
node testEnhancedImport.js

# Verify data integrity
node countAllSourceRecords.js

# Analyze specific file issues
node analyzeFeb2025File.js  # (modify filename as needed)

# Schema updates
npx prisma db push
npx prisma generate
```

## Success Indicators

A successful import should show:
- ✅ All source files processed
- ✅ Success rate > 99.5%
- ✅ New employees with missing assignments imported as "Unassigned"
- ✅ Duplicate employees handled gracefully
- ✅ No constraint violation errors
- ✅ Placeholder seniority numbers properly flagged

## File Naming Convention

Expected format: `[Month] [Year] Seniority List(Sheet1).csv`
Examples:
- `February 2025 Seniority List(Sheet1).csv`
- `March 2025 Seniority List(Sheet1).csv`
- `September 2024 Seniority List(Sheet1) (1).csv` (with duplicate indicator)

## Notes for Future Enhancement

1. **Batch Processing**: Current importer processes row-by-row. Consider batching for large files (>20k records)
2. **Progress Tracking**: Add progress indicators for long-running imports
3. **Data Validation**: Consider pre-import validation to catch issues early
4. **Backup Strategy**: Always backup database before major imports
5. **Audit Trail**: Enhanced logging for compliance requirements

---

**Last Updated**: Based on February 2025 import troubleshooting
**Success Rate**: 100% with robust importer implementation
**Key Files**: 
- `/src/robustDataImporter.js` (main importer)
- `/src/categoryParser.js` (handles empty categories)
- `/testEnhancedImport.js` (validation tool)