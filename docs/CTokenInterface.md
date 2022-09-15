# CTokenInterface









## Methods

### _acceptAdmin

```solidity
function _acceptAdmin() external nonpayable returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _reduceReserves

```solidity
function _reduceReserves(uint256 reduceAmount) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| reduceAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setComptroller

```solidity
function _setComptroller(contract ComptrollerInterface newComptroller) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newComptroller | contract ComptrollerInterface | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setInterestRateModel

```solidity
function _setInterestRateModel(contract InterestRateModel newInterestRateModel) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newInterestRateModel | contract InterestRateModel | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setPendingAdmin

```solidity
function _setPendingAdmin(address payable newPendingAdmin) external nonpayable returns (uint256)
```

* Admin Functions **



#### Parameters

| Name | Type | Description |
|---|---|---|
| newPendingAdmin | address payable | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setReserveFactor

```solidity
function _setReserveFactor(uint256 newReserveFactorMantissa) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newReserveFactorMantissa | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### accrualBlockNumber

```solidity
function accrualBlockNumber() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### accrueInterest

```solidity
function accrueInterest() external nonpayable returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### admin

```solidity
function admin() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined |

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOfUnderlying

```solidity
function balanceOfUnderlying(address owner) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowBalanceCurrent

```solidity
function borrowBalanceCurrent(address account) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowBalanceStored

```solidity
function borrowBalanceStored(address account) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowIndex

```solidity
function borrowIndex() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowRatePerBlock

```solidity
function borrowRatePerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### comptroller

```solidity
function comptroller() external view returns (contract ComptrollerInterface)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ComptrollerInterface | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### exchangeRateCurrent

```solidity
function exchangeRateCurrent() external nonpayable returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### exchangeRateStored

```solidity
function exchangeRateStored() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getAccountSnapshot

```solidity
function getAccountSnapshot(address account) external view returns (uint256, uint256, uint256, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |
| _3 | uint256 | undefined |

### getCash

```solidity
function getCash() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### interestRateModel

```solidity
function interestRateModel() external view returns (contract InterestRateModel)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract InterestRateModel | undefined |

### isCToken

```solidity
function isCToken() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### name

```solidity
function name() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### pendingAdmin

```solidity
function pendingAdmin() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined |

### protocolSeizeShareMantissa

```solidity
function protocolSeizeShareMantissa() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### reserveFactorMantissa

```solidity
function reserveFactorMantissa() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### seize

```solidity
function seize(address liquidator, address borrower, uint256 seizeTokens) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| liquidator | address | undefined |
| borrower | address | undefined |
| seizeTokens | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### supplyRatePerBlock

```solidity
function supplyRatePerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalBorrows

```solidity
function totalBorrows() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalBorrowsCurrent

```solidity
function totalBorrowsCurrent() external nonpayable returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalReserves

```solidity
function totalReserves() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address dst, uint256 amount) external nonpayable returns (bool)
```

* User Interface **



#### Parameters

| Name | Type | Description |
|---|---|---|
| dst | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address src, address dst, uint256 amount) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| src | address | undefined |
| dst | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### AccrueInterest

```solidity
event AccrueInterest(uint256 cashPrior, uint256 interestAccumulated, uint256 borrowIndex, uint256 totalBorrows)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cashPrior  | uint256 | undefined |
| interestAccumulated  | uint256 | undefined |
| borrowIndex  | uint256 | undefined |
| totalBorrows  | uint256 | undefined |

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| amount  | uint256 | undefined |

### Borrow

```solidity
event Borrow(address borrower, uint256 borrowAmount, uint256 accountBorrows, uint256 totalBorrows)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower  | address | undefined |
| borrowAmount  | uint256 | undefined |
| accountBorrows  | uint256 | undefined |
| totalBorrows  | uint256 | undefined |

### Failure

```solidity
event Failure(uint256 error, uint256 info, uint256 detail)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| error  | uint256 | undefined |
| info  | uint256 | undefined |
| detail  | uint256 | undefined |

### LiquidateBorrow

```solidity
event LiquidateBorrow(address liquidator, address borrower, uint256 repayAmount, address cTokenCollateral, uint256 seizeTokens)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| liquidator  | address | undefined |
| borrower  | address | undefined |
| repayAmount  | uint256 | undefined |
| cTokenCollateral  | address | undefined |
| seizeTokens  | uint256 | undefined |

### Mint

```solidity
event Mint(address minter, uint256 mintAmount, uint256 mintTokens)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| minter  | address | undefined |
| mintAmount  | uint256 | undefined |
| mintTokens  | uint256 | undefined |

### NewAdmin

```solidity
event NewAdmin(address oldAdmin, address newAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldAdmin  | address | undefined |
| newAdmin  | address | undefined |

### NewComptroller

```solidity
event NewComptroller(contract ComptrollerInterface oldComptroller, contract ComptrollerInterface newComptroller)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldComptroller  | contract ComptrollerInterface | undefined |
| newComptroller  | contract ComptrollerInterface | undefined |

### NewMarketInterestRateModel

```solidity
event NewMarketInterestRateModel(contract InterestRateModel oldInterestRateModel, contract InterestRateModel newInterestRateModel)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldInterestRateModel  | contract InterestRateModel | undefined |
| newInterestRateModel  | contract InterestRateModel | undefined |

### NewPendingAdmin

```solidity
event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldPendingAdmin  | address | undefined |
| newPendingAdmin  | address | undefined |

### NewReserveFactor

```solidity
event NewReserveFactor(uint256 oldReserveFactorMantissa, uint256 newReserveFactorMantissa)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldReserveFactorMantissa  | uint256 | undefined |
| newReserveFactorMantissa  | uint256 | undefined |

### Redeem

```solidity
event Redeem(address redeemer, uint256 redeemAmount, uint256 redeemTokens)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemer  | address | undefined |
| redeemAmount  | uint256 | undefined |
| redeemTokens  | uint256 | undefined |

### RepayBorrow

```solidity
event RepayBorrow(address payer, address borrower, uint256 repayAmount, uint256 accountBorrows, uint256 totalBorrows)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| payer  | address | undefined |
| borrower  | address | undefined |
| repayAmount  | uint256 | undefined |
| accountBorrows  | uint256 | undefined |
| totalBorrows  | uint256 | undefined |

### ReservesAdded

```solidity
event ReservesAdded(address benefactor, uint256 addAmount, uint256 newTotalReserves)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| benefactor  | address | undefined |
| addAmount  | uint256 | undefined |
| newTotalReserves  | uint256 | undefined |

### ReservesReduced

```solidity
event ReservesReduced(address admin, uint256 reduceAmount, uint256 newTotalReserves)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| admin  | address | undefined |
| reduceAmount  | uint256 | undefined |
| newTotalReserves  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| amount  | uint256 | undefined |



