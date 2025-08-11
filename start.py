import webbrowser
import os

try:
    # 打开index.html文件
    webbrowser.open('file://' + os.path.realpath('index.html'))
    print('应用已启动，请在浏览器中查看。')
except Exception as e:
    print(f'无法打开浏览器: {e}')
    print('请手动在浏览器中打开index.html文件。')
    input('按Enter键退出...')