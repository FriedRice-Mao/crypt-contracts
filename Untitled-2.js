/**
 * 计算拉高均价所需的加仓数量
 * @param {number} currentSize - 当前持仓数量 (如 22.4)
 * @param {number} currentPrice - 当前开仓价格 (如 2001.64)
 * @param {number} targetAvgPrice - 目标开仓均价 (如 2040)
 * @param {number} addPrice - 计划加仓的价格 (必须大于 2040)
 * @returns {number} 需要加仓的数量
 */
function calculateAddSize(currentSize, currentPrice, targetAvgPrice, addPrice) {
    if (addPrice <= targetAvgPrice) {
        throw new Error(`加仓价格 (${addPrice}) 必须严格大于目标均价 (${targetAvgPrice})`);
    }
    
    const numerator = currentSize * (targetAvgPrice - currentPrice);
    const denominator = addPrice - targetAvgPrice;
    const addSize = numerator / denominator;
    
    return addSize;
}

/**
 * 计算达到目标均价所需的加仓价格
 * @param {number} currentSize - 当前持仓数量
 * @param {number} currentPrice - 当前开仓价格
 * @param {number} targetAvgPrice - 目标开仓均价
 * @param {number} addSize - 计划加仓的数量
 * @returns {number} 应该挂单的加仓价格
 */
function calculateAddPrice(currentSize, currentPrice, targetAvgPrice, addSize) {
    if (addSize <= 0) {
        throw new Error("加仓数量必须大于 0");
    }

    const totalValueTarget = targetAvgPrice * (currentSize + addSize);
    const currentValue = currentSize * currentPrice;
    const addPrice = (totalValueTarget - currentValue) / addSize;

    return addPrice;
}

// === 测试与使用示例 ===
const S1 = 22.4;
const P1 = 2001.64;
const P_avg = 2040;

// 示例 1: 假设你在 2100 的价格加仓，需要加多少？
try {
    const addPrice = 2100;
    const requiredSize = calculateAddSize(S1, P1, P_avg, addPrice);
    console.log(`如果在价格 ${addPrice} 加仓，你需要加 ${requiredSize.toFixed(4)} 个 ETH`);
} catch (error) {
    console.error(error.message);
}

// 示例 2: 假设你只想加 10 个 ETH，应该在什么价格挂单？
try {
    const addSize = 10;
    const requiredPrice = calculateAddPrice(S1, P1, P_avg, addSize);
    console.log(`如果只加仓 ${addSize} 个 ETH，你需要把挂单设在 ${requiredPrice.toFixed(2)} 的价格`);
} catch (error) {
    console.error(error.message);
}