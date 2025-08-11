// 测试andar动词的preterito-perfeito-do-subjuntivo时态
console.log('测试andar动词的preterito-perfeito-do-subjuntivo时态');

// 模拟选择andar动词和preterito-perfeito-do-subjuntivo时态
const verb = 'andar';
const tense = 'preterito-perfeito-do-subjuntivo';

// 检查verbConjugations是否定义
if (typeof verbConjugations !== 'undefined') {
    console.log('verbConjugations已定义');

    // 检查verbConjugations是否包含andar动词
    if (verbConjugations[verb]) {
        console.log('找到了andar动词的定义');

        // 检查该动词是否包含preterito-perfeito-do-subjuntivo时态
        if (verbConjugations[verb][tense]) {
            console.log('找到了preterito-perfeito-do-subjuntivo时态的数据:');
            console.log(verbConjugations[verb][tense]);
            alert('测试成功！找到了andar动词的preterito-perfeito-do-subjuntivo时态数据');
        } else {
            console.error('未找到preterito-perfeito-do-subjuntivo时态的数据');
            alert('测试失败：未找到andar动词的preterito-perfeito-do-subjuntivo时态数据');
        }
    } else {
        console.error('未找到andar动词的定义');
        alert('测试失败：未找到andar动词的定义');
    }
} else {
    console.error('verbConjugations未定义');
    alert('测试失败：verbConjugations未定义');
}