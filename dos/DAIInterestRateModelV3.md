# DAIInterestRateModelV3

*Compound (modified by Dharma Labs)*

> Compound&#39;s DAIInterestRateModel Contract (version 3)

The parameterized model described in section 2.4 of the original Compound Protocol whitepaper. Version 3 modifies the interest rate model in Version 2 by increasing the initial &quot;gap&quot; or slope of the model prior to the &quot;kink&quot; from 2% to 4%, and enabling updateable parameters.



## Methods

### assumedOneMinusReserveFactorMantissa

```solidity
function assumedOneMinusReserveFactorMantissa() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### dsrPerBlock

```solidity
function dsrPerBlock() external view returns (uint256)
```

Calculates the Dai savings rate per block




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### gapPerBlock

```solidity
function gapPerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getBorrowRate

```solidity
function getBorrowRate(uint256 cash, uint256 borrows, uint256 reserves) external view returns (uint256)
```

Calculates the current borrow rate per block



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

Calculates the current supply interest rate per block including the Dai savings rate



#### Parameters

| Name | Type | Description |
|---|---|---|
| cash | uint256 | The total amount of cash the market has |
| borrows | uint256 | The total amount of borrows the market has outstanding |
| reserves | uint256 | The total amnount of reserves the market has |
| reserveFactorMantissa | uint256 | The current reserve factor the market has |

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

### jumpMultiplierPerBlock

```solidity
function jumpMultiplierPerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### kink

```solidity
function kink() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### multiplierPerBlock

```solidity
function multiplierPerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### poke

```solidity
function poke() external nonpayable
```

Resets the baseRate and multiplier per block based on the stability fee and Dai savings rate




### updateJumpRateModel

```solidity
function updateJumpRateModel(uint256 baseRatePerYear, uint256 gapPerYear, uint256 jumpMultiplierPerYear, uint256 kink_) external nonpayable
```

External function to update the parameters of the interest rate model



#### Parameters

| Name | Type | Description |
|---|---|---|
| baseRatePerYear | uint256 | The approximate target base APR, as a mantissa (scaled by 1e18). For DAI, this is calculated from DSR and SF. Input not used. |
| gapPerYear | uint256 | The Additional margin per year separating the base borrow rate from the roof. (scaled by 1e18) |
| jumpMultiplierPerYear | uint256 | The jumpMultiplierPerYear after hitting a specified utilization point |
| kink_ | uint256 | The utilization point at which the jump multiplier is applied |

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
event NewInterestParams(uint256 baseRatePerBlock, uint256 multiplierPerBlock, uint256 jumpMultiplierPerBlock, uint256 kink)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| baseRatePerBlock  | uint256 | undefined |
| multiplierPerBlock  | uint256 | undefined |
| jumpMultiplierPerBlock  | uint256 | undefined |
| kink  | uint256 | undefined |



