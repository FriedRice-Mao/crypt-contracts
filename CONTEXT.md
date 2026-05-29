# Crypt-Contracts

A universal crypto position averaging calculator. Helps traders compute add size or add price needed to reach a target average entry price.

## Language

**Position Size**:
当前持有的合约或币的数量。
_Avoid_: 仓位大小, 持有量

**Entry Price**:
当前持仓的加权平均开仓价格。
_Avoid_: 开仓价, 成本价

**Target Average Price**:
加仓后希望达到的新均价目标。
_Avoid_: 目标价, 目标均价

**Add Price**:
计划挂单加仓的价格。高于 Entry Price 则拉高均价，低于则摊低均价。
_Avoid_: 加仓价, 挂单价

**Add Size**:
计划加仓的数量。
_Avoid_: 加仓量, 加仓数

**Trading Pair**:
用于标识计算所属的交易对（如 ETH/USDT），仅作展示用途，不影响计算逻辑。
_Avoid_: 币种, 交易品种
