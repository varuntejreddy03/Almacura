@echo off
echo Starting ALMACURA Color Migration...

REM Background colors
powershell -Command "(Get-Content src\pages\*.jsx) -replace 'bg-brand-black', 'bg-brand-white' | Set-Content src\pages\*.jsx"
powershell -Command "(Get-Content src\pages\*.jsx) -replace 'bg-brand-deep', 'bg-brand-ice' | Set-Content src\pages\*.jsx"
powershell -Command "(Get-Content src\pages\*.jsx) -replace 'bg-brand-card', 'bg-brand-white' | Set-Content src\pages\*.jsx"

REM Text colors
powershell -Command "(Get-Content src\pages\*.jsx) -replace 'text-brand-white', 'text-brand-navy' | Set-Content src\pages\*.jsx"

REM Hover states
powershell -Command "(Get-Content src\pages\*.jsx) -replace 'hover:bg-brand-tealLight', 'hover:bg-brand-blue' | Set-Content src\pages\*.jsx"

echo Color migration complete!
pause
