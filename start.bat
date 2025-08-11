@echo off
REM 尝试打开Chrome浏览器
start chrome index.html
if %ERRORLEVEL% EQU 0 exit /b 0

REM 尝试打开Firefox浏览器
start firefox index.html
if %ERRORLEVEL% EQU 0 exit /b 0

REM 尝试打开Microsoft Edge浏览器
start microsoft-edge index.html
if %ERRORLEVEL% EQU 0 exit /b 0

REM 如果所有浏览器都无法打开，显示提示信息
echo 无法打开浏览器。请手动在浏览器中打开index.html文件。
pause