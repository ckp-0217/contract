# CErc20Delegator

*Compound*

> Compound&#39;s CErc20Delegator Contract

CTokens which wrap an EIP-20 underlying and delegate to an implementation



## Methods

### _acceptAdmin

```solidity
function _acceptAdmin() external nonpayable returns (uint256)
```

Accepts transfer of admin rights. msg.sender must be pendingAdmin

*Admin function for pending admin to accept role and update admin*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _addReserves

```solidity
function _addReserves(uint256 addAmount) external nonpayable returns (uint256)
```

Accrues interest and adds reserves by transferring from admin



#### Parameters

| Name | Type | Description |
|---|---|---|
| addAmount | uint256 | Amount of reserves to add |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _reduceReserves

```solidity
function _reduceReserves(uint256 reduceAmount) external nonpayable returns (uint256)
```

Accrues interest and reduces reserves by transferring to admin



#### Parameters

| Name | Type | Description |
|---|---|---|
| reduceAmount | uint256 | Amount of reduction to reserves |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setComptroller

```solidity
function _setComptroller(contract ComptrollerInterface newComptroller) external nonpayable returns (uint256)
```

Sets a new comptroller for the market

*Admin function to set a new comptroller*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newComptroller | contract ComptrollerInterface | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setImplementation

```solidity
function _setImplementation(address implementation_, bool allowResign, bytes becomeImplementationData) external nonpayable
```

Called by the admin to update the implementation of the delegator



#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation_ | address | The address of the new implementation for delegation |
| allowResign | bool | Flag to indicate whether to call _resignImplementation on the old implementation |
| becomeImplementationData | bytes | The encoded bytes data to be passed to _becomeImplementation |

### _setInterestRateModel

```solidity
function _setInterestRateModel(contract InterestRateModel newInterestRateModel) external nonpayable returns (uint256)
```

Accrues interest and updates the interest rate model using _setInterestRateModelFresh

*Admin function to accrue interest and update the interest rate model*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newInterestRateModel | contract InterestRateModel | the new interest rate model to use |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setPendingAdmin

```solidity
function _setPendingAdmin(address payable newPendingAdmin) external nonpayable returns (uint256)
```

Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

*Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newPendingAdmin | address payable | New pending admin. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setReserveFactor

```solidity
function _setReserveFactor(uint256 newReserveFactorMantissa) external nonpayable returns (uint256)
```

accrues interest and sets a new reserve factor for the protocol using _setReserveFactorFresh

*Admin function to accrue interest and set a new reserve factor*

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

Applies accrued interest to total borrows and reserves.

*This calculates interest accrued from the last checkpointed block     up to the current block and writes new checkpoint to storage.*


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

Get the current allowance from `owner` for `spender`



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The address of the account which owns the tokens to be spent |
| spender | address | The address of the account which may transfer tokens |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```

Approve `spender` to transfer up to `amount` from `src`

*This will overwrite the approval amount for `spender` and is subject to issues noted [here](https://eips.ethereum.org/EIPS/eip-20#approve)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | The address of the account which may transfer tokens |
| amount | uint256 | The number of tokens that are approved (-1 means infinite) |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```

Get the token balance of the `owner`



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The address of the account to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOfUnderlying

```solidity
function balanceOfUnderlying(address owner) external nonpayable returns (uint256)
```

Get the underlying balance of the `owner`

*This also accrues interest in a transaction*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The address of the account to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrow

```solidity
function borrow(uint256 borrowAmount) external nonpayable returns (uint256)
```

Sender borrows assets from the protocol to their own address



#### Parameters

| Name | Type | Description |
|---|---|---|
| borrowAmount | uint256 | The amount of the underlying asset to borrow |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowBalanceCurrent

```solidity
function borrowBalanceCurrent(address account) external nonpayable returns (uint256)
```

Accrue interest to updated borrowIndex and then calculate account&#39;s borrow balance using the updated borrowIndex



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address whose balance should be calculated after updating borrowIndex |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowBalanceStored

```solidity
function borrowBalanceStored(address account) external view returns (uint256)
```

Return the borrow balance of account based on stored data



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address whose balance should be calculated |

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

Returns the current per-block borrow interest rate for this cToken




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

### delegateToImplementation

```solidity
function delegateToImplementation(bytes data) external nonpayable returns (bytes)
```

Delegates execution to the implementation contract

*It returns to the external caller whatever the implementation returns or forwards reverts*

#### Parameters

| Name | Type | Description |
|---|---|---|
| data | bytes | The raw data to delegatecall |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### delegateToViewImplementation

```solidity
function delegateToViewImplementation(bytes data) external view returns (bytes)
```

Delegates execution to an implementation contract

*It returns to the external caller whatever the implementation returns or forwards reverts There are an additional 2 prefix uints from the wrapper returndata, which we ignore since we make an extra hop.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| data | bytes | The raw data to delegatecall |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### exchangeRateCurrent

```solidity
function exchangeRateCurrent() external nonpayable returns (uint256)
```

Accrue interest then return the up-to-date exchange rate




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### exchangeRateStored

```solidity
function exchangeRateStored() external view returns (uint256)
```

Calculates the exchange rate from the underlying to the CToken

*This function does not accrue interest before calculating the exchange rate*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getAccountSnapshot

```solidity
function getAccountSnapshot(address account) external view returns (uint256, uint256, uint256, uint256)
```

Get a snapshot of the account&#39;s balances, and the cached exchange rate

*This is used by comptroller to more efficiently perform liquidity checks.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | Address of the account to snapshot |

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

Get cash balance of this cToken in the underlying asset




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### implementation

```solidity
function implementation() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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

### liquidateBorrow

```solidity
function liquidateBorrow(address borrower, uint256 repayAmount, contract CTokenInterface cTokenCollateral) external nonpayable returns (uint256)
```

The sender liquidates the borrowers collateral. The collateral seized is transferred to the liquidator.



#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower | address | The borrower of this cToken to be liquidated |
| repayAmount | uint256 | The amount of the underlying borrowed asset to repay |
| cTokenCollateral | contract CTokenInterface | The market in which to seize collateral from the borrower |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint

```solidity
function mint(uint256 mintAmount) external nonpayable returns (uint256)
```

Sender supplies assets into the market and receives cTokens in exchange

*Accrues interest whether or not the operation succeeds, unless reverted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| mintAmount | uint256 | The amount of the underlying asset to supply |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### redeem

```solidity
function redeem(uint256 redeemTokens) external nonpayable returns (uint256)
```

Sender redeems cTokens in exchange for the underlying asset

*Accrues interest whether or not the operation succeeds, unless reverted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemTokens | uint256 | The number of cTokens to redeem into underlying |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### redeemUnderlying

```solidity
function redeemUnderlying(uint256 redeemAmount) external nonpayable returns (uint256)
```

Sender redeems cTokens in exchange for a specified amount of underlying asset

*Accrues interest whether or not the operation succeeds, unless reverted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemAmount | uint256 | The amount of underlying to redeem |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### repayBorrow

```solidity
function repayBorrow(uint256 repayAmount) external nonpayable returns (uint256)
```

Sender repays their own borrow



#### Parameters

| Name | Type | Description |
|---|---|---|
| repayAmount | uint256 | The amount to repay |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### repayBorrowBehalf

```solidity
function repayBorrowBehalf(address borrower, uint256 repayAmount) external nonpayable returns (uint256)
```

Sender repays a borrow belonging to borrower



#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower | address | the account with the debt being payed off |
| repayAmount | uint256 | The amount to repay |

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

Transfers collateral tokens (this market) to the liquidator.

*Will fail unless called by another cToken during the process of liquidation. Its absolutely critical to use msg.sender as the borrowed cToken and not a parameter.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| liquidator | address | The account receiving seized collateral |
| borrower | address | The account having collateral seized |
| seizeTokens | uint256 | The number of cTokens to seize |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### supplyRatePerBlock

```solidity
function supplyRatePerBlock() external view returns (uint256)
```

Returns the current per-block supply interest rate for this cToken




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### sweepToken

```solidity
function sweepToken(contract EIP20NonStandardInterface token) external nonpayable
```

A public function to sweep accidental ERC-20 transfers to this contract. Tokens are sent to admin (timelock)



#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract EIP20NonStandardInterface | The address of the ERC-20 token to sweep |

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

Returns the current total borrows plus accrued interest




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

Transfer `amount` tokens from `msg.sender` to `dst`



#### Parameters

| Name | Type | Description |
|---|---|---|
| dst | address | The address of the destination account |
| amount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address src, address dst, uint256 amount) external nonpayable returns (bool)
```

Transfer `amount` tokens from `src` to `dst`



#### Parameters

| Name | Type | Description |
|---|---|---|
| src | address | The address of the source account |
| dst | address | The address of the destination account |
| amount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### underlying

```solidity
function underlying() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



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

### NewImplementation

```solidity
event NewImplementation(address oldImplementation, address newImplementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldImplementation  | address | undefined |
| newImplementation  | address | undefined |

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



