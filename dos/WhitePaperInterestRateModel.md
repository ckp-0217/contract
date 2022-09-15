# WhitePaperInterestRateModel

*Compound*

> Compound&#39;s WhitePaperInterestRateModel Contract

The parameterized model described in section 2.4 of the original Compound Protocol whitepaper



## Methods

### baseRatePerBlock

```solidity
function baseRatePerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### blocksPerYear

```solidity
function blocksPerYear() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getBorrowRate

```solidity
function getBorrowRate(uint256 cash, uint256 borrows, uint256 reserves) external view returns (uint256)
```

Calculates the current borrow rate per block, with the error code expected by the market



#### Parameters

| Name | Type | Description |
|---|---|---|
| cash | uint256 | The amount of cash in the market |
| borrows | uint256 | The amount of borrows in the market |
| reserves | uint256 | The amount of reserves in the market |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getSupplyRate

```solidity
function getSupplyRate(uint256 cash, uint256 borrows, uint256 reserves, uint256 reserveFactorMantissa) external view returns (uint256)
```

Calculates the current supply rate per block



#### Parameters

| Name | Type | Description |
|---|---|---|
| cash | uint256 | The amount of cash in the market |
| borrows | uint256 | The amount of borrows in the market |
| reserves | uint256 | The amount of reserves in the market |
| reserveFactorMantissa | uint256 | The current reserve factor for the market |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### isInterestRateModel

```solidity
function isInterestRateModel() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### multiplierPerBlock

```solidity
function multiplierPerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### utilizationRate

```solidity
function utilizationRate(uint256 cash, uint256 borrows, uint256 reserves) external pure returns (uint256)
```

Calculates the utilization rate of the market: `borrows / (cash + borrows - reserves)`



#### Parameters

| Name | Type | Description |
|---|---|---|
| cash | uint256 | The amount of cash in the market |
| borrows | uint256 | The amount of borrows in the market |
| reserves | uint256 | The amount of reserves in the market (currently unused) |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |



## Events

### NewInterestParams

```solidity
event NewInterestParams(uint256 baseRatePerBlock, uint256 multiplierPerBlock)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| baseRatePerBlock  | uint256 | undefined |
| multiplierPerBlock  | uint256 | undefined |



