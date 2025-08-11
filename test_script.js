// 简化版测试脚本
console.log('测试脚本加载成功');

// 模拟动词变位数据
const verbConjugations = {
    'ser': {
        'presente': ['sou', 'és', 'é', 'somos', 'sois', 'são']
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，开始初始化...');
    
    // 获取DOM元素
    const verbSelect = document.getElementById('verb');
    const tenseSelect = document.getElementById('tense');
    const generateBtn = document.getElementById('generate');
    const resultTitle = document.getElementById('result-title');
    const conjugationList = document.getElementById('conjugation-list');
    const conjugationResult = document.getElementById('conjugation-result');
    
    console.log('verbSelect:', verbSelect);
    console.log('tenseSelect:', tenseSelect);
    console.log('generateBtn:', generateBtn);
    
    // 生成变位函数
    function generateConjugation() {
        console.log('generateConjugation函数被调用');
        
        const verb = verbSelect.value || 'ser';
        const tense = tenseSelect.value || 'presente';
        
        console.log('选择的动词:', verb);
        console.log('选择的时态:', tense);
        
        if (!verbConjugations[verb] || !verbConjugations[verb][tense]) {
            console.error('未找到变位数据');
            return;
        }
        
        const conjugations = verbConjugations[verb][tense];
        
        // 更新标题
        resultTitle.textContent = `${verb} - ${tense}`;
        
        // 清空之前的结果
        conjugationList.innerHTML = '';
        
        // 添加新的变位结果
        conjugations.forEach(conj => {
            const li = document.createElement('li');
            li.textContent = conj;
            conjugationList.appendChild(li);
        });
        
        // 显示结果
        conjugationResult.style.display = 'block';
    }
    
    // 添加事件监听器
    if (generateBtn) {
        generateBtn.addEventListener('click', generateConjugation);
        console.log('生成按钮点击事件已添加');
    }
    
    // 初始化生成一次变位
    generateConjugation();
});