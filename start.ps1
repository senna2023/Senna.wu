# 使用Vite启动应用程序
Write-Host "正在使用Vite启动应用程序..."

try {
    # 检查npm是否安装
    if (-not (Get-Command "npm" -ErrorAction SilentlyContinue)) {
        throw "未找到npm，请确保已安装Node.js"
    }
    
    # 使用npm启动vite
    npm run dev
    
    # 如果上述命令失败，尝试直接使用vite
    if ($LASTEXITCODE -ne 0) {
        Write-Host "尝试直接使用vite命令..."
        vite
    }
} catch {
    Write-Host "启动失败: $_"
    Write-Host "请尝试手动在终端中运行 'npm run dev' 或 'vite'"
    Read-Host -Prompt "按Enter键退出"
}