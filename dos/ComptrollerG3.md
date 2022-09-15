# ComptrollerG3

*Compound*

> Compound&#39;s Comptroller Contract





## Methods

### _addCompMarkets

```solidity
function _addCompMarkets(address[] cTokens) external nonpayable
```

Add markets to compMarkets, allowing them to earn COMP in the flywheel



#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokens | address[] | The addresses of the markets to add |

### _become

```solidity
function _become(contract Unitroller unitroller, uint256 compRate_, address[] compMarketsToAdd, address[] otherMarketsToAdd) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| unitroller | contract Unitroller | undefined |
| compRate_ | uint256 | undefined |
| compMarketsToAdd | address[] | undefined |
| otherMarketsToAdd | address[] | undefined |

### _becomeG3

```solidity
function _becomeG3(uint256 compRate_, address[] compMarketsToAdd, address[] otherMarketsToAdd) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| compRate_ | uint256 | undefined |
| compMarketsToAdd | address[] | undefined |
| otherMarketsToAdd | address[] | undefined |

### _borrowGuardianPaused

```solidity
function _borrowGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _dropCompMarket

```solidity
function _dropCompMarket(address cToken) external nonpayable
```

Remove a market from compMarkets, preventing it from earning COMP in the flywheel



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | The address of the market to drop |

### _mintGuardianPaused

```solidity
function _mintGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _setBorrowPaused

```solidity
function _setBorrowPaused(contract CToken cToken, bool state) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | undefined |
| state | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _setCloseFactor

```solidity
function _setCloseFactor(uint256 newCloseFactorMantissa) external nonpayable returns (uint256)
```

Sets the closeFactor used when liquidating borrows

*Admin function to set closeFactor*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newCloseFactorMantissa | uint256 | New close factor, scaled by 1e18 |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setCollateralFactor

```solidity
function _setCollateralFactor(contract CToken cToken, uint256 newCollateralFactorMantissa) external nonpayable returns (uint256)
```

Sets the collateralFactor for a market

*Admin function to set per-market collateralFactor*

#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | The market to set the factor on |
| newCollateralFactorMantissa | uint256 | The new collateral factor, scaled by 1e18 |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setCompRate

```solidity
function _setCompRate(uint256 compRate_) external nonpayable
```

Set the amount of COMP distributed per block



#### Parameters

| Name | Type | Description |
|---|---|---|
| compRate_ | uint256 | The amount of COMP wei per block to distribute |

### _setLiquidationIncentive

```solidity
function _setLiquidationIncentive(uint256 newLiquidationIncentiveMantissa) external nonpayable returns (uint256)
```

Sets liquidationIncentive

*Admin function to set liquidationIncentive*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newLiquidationIncentiveMantissa | uint256 | New liquidationIncentive scaled by 1e18 |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setMaxAssets

```solidity
function _setMaxAssets(uint256 newMaxAssets) external nonpayable returns (uint256)
```

Sets maxAssets which controls how many markets can be entered

*Admin function to set maxAssets*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newMaxAssets | uint256 | New max assets |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setMintPaused

```solidity
function _setMintPaused(contract CToken cToken, bool state) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | undefined |
| state | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _setPauseGuardian

```solidity
function _setPauseGuardian(address newPauseGuardian) external nonpayable returns (uint256)
```

Admin function to change the Pause Guardian



#### Parameters

| Name | Type | Description |
|---|---|---|
| newPauseGuardian | address | The address of the new Pause Guardian |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setPriceOracle

```solidity
function _setPriceOracle(contract PriceOracle newOracle) external nonpayable returns (uint256)
```

Sets a new price oracle for the comptroller

*Admin function to set a new price oracle*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOracle | contract PriceOracle | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setSeizePaused

```solidity
function _setSeizePaused(bool state) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| state | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _setTransferPaused

```solidity
function _setTransferPaused(bool state) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| state | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _supportMarket

```solidity
function _supportMarket(contract CToken cToken) external nonpayable returns (uint256)
```

Add the market to the markets mapping and set it as listed

*Admin function to set isListed and add support for the market*

#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | The address of the market (token) to list |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### accountAssets

```solidity
function accountAssets(address, uint256) external view returns (contract CToken)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract CToken | undefined |

### admin

```solidity
function admin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### allMarkets

```solidity
function allMarkets(uint256) external view returns (contract CToken)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract CToken | undefined |

### borrowAllowed

```solidity
function borrowAllowed(address cToken, address borrower, uint256 borrowAmount) external nonpayable returns (uint256)
```

Checks if the account should be allowed to borrow the underlying asset of the given market



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | The market to verify the borrow against |
| borrower | address | The account which would borrow the asset |
| borrowAmount | uint256 | The amount of underlying the account would borrow |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrowGuardianPaused

```solidity
function borrowGuardianPaused(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### borrowVerify

```solidity
function borrowVerify(address cToken, address borrower, uint256 borrowAmount) external nonpayable
```

Validates borrow and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | Asset whose underlying is being borrowed |
| borrower | address | The address borrowing the underlying |
| borrowAmount | uint256 | The amount of the underlying asset requested to borrow |

### checkMembership

```solidity
function checkMembership(address account, contract CToken cToken) external view returns (bool)
```

Returns whether the given account is entered in the given asset



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account to check |
| cToken | contract CToken | The cToken to check |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### claimComp

```solidity
function claimComp(address holder, contract CToken[] cTokens) external nonpayable
```

Claim all the comp accrued by holder in the specified markets



#### Parameters

| Name | Type | Description |
|---|---|---|
| holder | address | The address to claim COMP for |
| cTokens | contract CToken[] | The list of markets to claim COMP in |

### claimComp

```solidity
function claimComp(address[] holders, contract CToken[] cTokens, bool borrowers, bool suppliers) external nonpayable
```

Claim all comp accrued by the holders



#### Parameters

| Name | Type | Description |
|---|---|---|
| holders | address[] | The addresses to claim COMP for |
| cTokens | contract CToken[] | The list of markets to claim COMP in |
| borrowers | bool | Whether or not to claim COMP earned by borrowing |
| suppliers | bool | Whether or not to claim COMP earned by supplying |

### claimComp

```solidity
function claimComp(address holder) external nonpayable
```

Claim all the comp accrued by holder in all markets



#### Parameters

| Name | Type | Description |
|---|---|---|
| holder | address | The address to claim COMP for |

### closeFactorMantissa

```solidity
function closeFactorMantissa() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compAccrued

```solidity
function compAccrued(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compBorrowState

```solidity
function compBorrowState(address) external view returns (uint224 index, uint32 block)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| index | uint224 | undefined |
| block | uint32 | undefined |

### compBorrowerIndex

```solidity
function compBorrowerIndex(address, address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compClaimThreshold

```solidity
function compClaimThreshold() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compInitialIndex

```solidity
function compInitialIndex() external view returns (uint224)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint224 | undefined |

### compRate

```solidity
function compRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compSpeeds

```solidity
function compSpeeds(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compSupplierIndex

```solidity
function compSupplierIndex(address, address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### compSupplyState

```solidity
function compSupplyState(address) external view returns (uint224 index, uint32 block)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| index | uint224 | undefined |
| block | uint32 | undefined |

### comptrollerImplementation

```solidity
function comptrollerImplementation() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### enterMarkets

```solidity
function enterMarkets(address[] cTokens) external nonpayable returns (uint256[])
```

Add assets to be included in account liquidity calculation



#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokens | address[] | The list of addresses of the cToken markets to be enabled |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### exitMarket

```solidity
function exitMarket(address cTokenAddress) external nonpayable returns (uint256)
```

Removes asset from sender&#39;s account liquidity calculation

*Sender must not have an outstanding borrow balance in the asset, or be providing neccessary collateral for an outstanding borrow.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokenAddress | address | The address of the asset to be removed |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getAccountLiquidity

```solidity
function getAccountLiquidity(address account) external view returns (uint256, uint256, uint256)
```

Determine the current account liquidity wrt collateral requirements



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

### getAllMarkets

```solidity
function getAllMarkets() external view returns (contract CToken[])
```

Return all of the markets

*The automatic getter may be used to access an individual market.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract CToken[] | undefined |

### getAssetsIn

```solidity
function getAssetsIn(address account) external view returns (contract CToken[])
```

Returns the assets an account has entered



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account to pull assets for |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract CToken[] | undefined |

### getBlockNumber

```solidity
function getBlockNumber() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getCompAddress

```solidity
function getCompAddress() external view returns (address)
```

Return the address of the COMP token




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getHypotheticalAccountLiquidity

```solidity
function getHypotheticalAccountLiquidity(address account, address cTokenModify, uint256 redeemTokens, uint256 borrowAmount) external view returns (uint256, uint256, uint256)
```

Determine what the account liquidity would be if the given amounts were redeemed/borrowed



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The account to determine liquidity for |
| cTokenModify | address | The market to hypothetically redeem/borrow in |
| redeemTokens | uint256 | The number of tokens to hypothetically redeem |
| borrowAmount | uint256 | The amount of underlying to hypothetically borrow |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |

### isComptroller

```solidity
function isComptroller() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### liquidateBorrowAllowed

```solidity
function liquidateBorrowAllowed(address cTokenBorrowed, address cTokenCollateral, address liquidator, address borrower, uint256 repayAmount) external nonpayable returns (uint256)
```

Checks if the liquidation should be allowed to occur



#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokenBorrowed | address | Asset which was borrowed by the borrower |
| cTokenCollateral | address | Asset which was used as collateral and will be seized |
| liquidator | address | The address repaying the borrow and seizing the collateral |
| borrower | address | The address of the borrower |
| repayAmount | uint256 | The amount of underlying being repaid |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### liquidateBorrowVerify

```solidity
function liquidateBorrowVerify(address cTokenBorrowed, address cTokenCollateral, address liquidator, address borrower, uint256 actualRepayAmount, uint256 seizeTokens) external nonpayable
```

Validates liquidateBorrow and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokenBorrowed | address | Asset which was borrowed by the borrower |
| cTokenCollateral | address | Asset which was used as collateral and will be seized |
| liquidator | address | The address repaying the borrow and seizing the collateral |
| borrower | address | The address of the borrower |
| actualRepayAmount | uint256 | The amount of underlying being repaid |
| seizeTokens | uint256 | undefined |

### liquidateCalculateSeizeTokens

```solidity
function liquidateCalculateSeizeTokens(address cTokenBorrowed, address cTokenCollateral, uint256 actualRepayAmount) external view returns (uint256, uint256)
```

Calculate number of tokens of collateral asset to seize given an underlying amount

*Used in liquidation (called in cToken.liquidateBorrowFresh)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokenBorrowed | address | The address of the borrowed cToken |
| cTokenCollateral | address | The address of the collateral cToken |
| actualRepayAmount | uint256 | The amount of cTokenBorrowed underlying to convert into cTokenCollateral tokens |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |

### liquidationIncentiveMantissa

```solidity
function liquidationIncentiveMantissa() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### markets

```solidity
function markets(address) external view returns (bool isListed, uint256 collateralFactorMantissa, bool isComped)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| isListed | bool | undefined |
| collateralFactorMantissa | uint256 | undefined |
| isComped | bool | undefined |

### maxAssets

```solidity
function maxAssets() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintAllowed

```solidity
function mintAllowed(address cToken, address minter, uint256 mintAmount) external nonpayable returns (uint256)
```

Checks if the account should be allowed to mint tokens in the given market



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | The market to verify the mint against |
| minter | address | The account which would get the minted tokens |
| mintAmount | uint256 | The amount of underlying being supplied to the market in exchange for tokens |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintGuardianPaused

```solidity
function mintGuardianPaused(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### mintVerify

```solidity
function mintVerify(address cToken, address minter, uint256 actualMintAmount, uint256 mintTokens) external nonpayable
```

Validates mint and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | Asset being minted |
| minter | address | The address minting the tokens |
| actualMintAmount | uint256 | The amount of the underlying asset being minted |
| mintTokens | uint256 | The number of tokens being minted |

### oracle

```solidity
function oracle() external view returns (contract PriceOracle)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract PriceOracle | undefined |

### pauseGuardian

```solidity
function pauseGuardian() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pendingAdmin

```solidity
function pendingAdmin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pendingComptrollerImplementation

```solidity
function pendingComptrollerImplementation() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### redeemAllowed

```solidity
function redeemAllowed(address cToken, address redeemer, uint256 redeemTokens) external nonpayable returns (uint256)
```

Checks if the account should be allowed to redeem tokens in the given market



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | The market to verify the redeem against |
| redeemer | address | The account which would redeem the tokens |
| redeemTokens | uint256 | The number of cTokens to exchange for the underlying asset in the market |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### redeemVerify

```solidity
function redeemVerify(address cToken, address redeemer, uint256 redeemAmount, uint256 redeemTokens) external nonpayable
```

Validates redeem and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | Asset being redeemed |
| redeemer | address | The address redeeming the tokens |
| redeemAmount | uint256 | The amount of the underlying asset being redeemed |
| redeemTokens | uint256 | The number of tokens being redeemed |

### refreshCompSpeeds

```solidity
function refreshCompSpeeds() external nonpayable
```

Recalculate and update COMP speeds for all COMP markets




### repayBorrowAllowed

```solidity
function repayBorrowAllowed(address cToken, address payer, address borrower, uint256 repayAmount) external nonpayable returns (uint256)
```

Checks if the account should be allowed to repay a borrow in the given market



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | The market to verify the repay against |
| payer | address | The account which would repay the asset |
| borrower | address | The account which would borrowed the asset |
| repayAmount | uint256 | The amount of the underlying asset the account would repay |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### repayBorrowVerify

```solidity
function repayBorrowVerify(address cToken, address payer, address borrower, uint256 actualRepayAmount, uint256 borrowerIndex) external nonpayable
```

Validates repayBorrow and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | Asset being repaid |
| payer | address | The address repaying the borrow |
| borrower | address | The address of the borrower |
| actualRepayAmount | uint256 | The amount of underlying being repaid |
| borrowerIndex | uint256 | undefined |

### seizeAllowed

```solidity
function seizeAllowed(address cTokenCollateral, address cTokenBorrowed, address liquidator, address borrower, uint256 seizeTokens) external nonpayable returns (uint256)
```

Checks if the seizing of assets should be allowed to occur



#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokenCollateral | address | Asset which was used as collateral and will be seized |
| cTokenBorrowed | address | Asset which was borrowed by the borrower |
| liquidator | address | The address repaying the borrow and seizing the collateral |
| borrower | address | The address of the borrower |
| seizeTokens | uint256 | The number of collateral tokens to seize |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### seizeGuardianPaused

```solidity
function seizeGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### seizeVerify

```solidity
function seizeVerify(address cTokenCollateral, address cTokenBorrowed, address liquidator, address borrower, uint256 seizeTokens) external nonpayable
```

Validates seize and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokenCollateral | address | Asset which was used as collateral and will be seized |
| cTokenBorrowed | address | Asset which was borrowed by the borrower |
| liquidator | address | The address repaying the borrow and seizing the collateral |
| borrower | address | The address of the borrower |
| seizeTokens | uint256 | The number of collateral tokens to seize |

### transferAllowed

```solidity
function transferAllowed(address cToken, address src, address dst, uint256 transferTokens) external nonpayable returns (uint256)
```

Checks if the account should be allowed to transfer tokens in the given market



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | The market to verify the transfer against |
| src | address | The account which sources the tokens |
| dst | address | The account which receives the tokens |
| transferTokens | uint256 | The number of cTokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferGuardianPaused

```solidity
function transferGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferVerify

```solidity
function transferVerify(address cToken, address src, address dst, uint256 transferTokens) external nonpayable
```

Validates transfer and reverts on rejection. May emit logs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | address | Asset being transferred |
| src | address | The account which sources the tokens |
| dst | address | The account which receives the tokens |
| transferTokens | uint256 | The number of cTokens to transfer |



## Events

### ActionPaused

```solidity
event ActionPaused(contract CToken cToken, string action, bool pauseState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken  | contract CToken | undefined |
| action  | string | undefined |
| pauseState  | bool | undefined |

### CompSpeedUpdated

```solidity
event CompSpeedUpdated(contract CToken indexed cToken, uint256 newSpeed)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken `indexed` | contract CToken | undefined |
| newSpeed  | uint256 | undefined |

### DistributedBorrowerComp

```solidity
event DistributedBorrowerComp(contract CToken indexed cToken, address indexed borrower, uint256 compDelta, uint256 compBorrowIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken `indexed` | contract CToken | undefined |
| borrower `indexed` | address | undefined |
| compDelta  | uint256 | undefined |
| compBorrowIndex  | uint256 | undefined |

### DistributedSupplierComp

```solidity
event DistributedSupplierComp(contract CToken indexed cToken, address indexed supplier, uint256 compDelta, uint256 compSupplyIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken `indexed` | contract CToken | undefined |
| supplier `indexed` | address | undefined |
| compDelta  | uint256 | undefined |
| compSupplyIndex  | uint256 | undefined |

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

### MarketComped

```solidity
event MarketComped(contract CToken cToken, bool isComped)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken  | contract CToken | undefined |
| isComped  | bool | undefined |

### MarketEntered

```solidity
event MarketEntered(contract CToken cToken, address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken  | contract CToken | undefined |
| account  | address | undefined |

### MarketExited

```solidity
event MarketExited(contract CToken cToken, address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken  | contract CToken | undefined |
| account  | address | undefined |

### MarketListed

```solidity
event MarketListed(contract CToken cToken)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken  | contract CToken | undefined |

### NewCloseFactor

```solidity
event NewCloseFactor(uint256 oldCloseFactorMantissa, uint256 newCloseFactorMantissa)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldCloseFactorMantissa  | uint256 | undefined |
| newCloseFactorMantissa  | uint256 | undefined |

### NewCollateralFactor

```solidity
event NewCollateralFactor(contract CToken cToken, uint256 oldCollateralFactorMantissa, uint256 newCollateralFactorMantissa)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken  | contract CToken | undefined |
| oldCollateralFactorMantissa  | uint256 | undefined |
| newCollateralFactorMantissa  | uint256 | undefined |

### NewCompRate

```solidity
event NewCompRate(uint256 oldCompRate, uint256 newCompRate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldCompRate  | uint256 | undefined |
| newCompRate  | uint256 | undefined |

### NewLiquidationIncentive

```solidity
event NewLiquidationIncentive(uint256 oldLiquidationIncentiveMantissa, uint256 newLiquidationIncentiveMantissa)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldLiquidationIncentiveMantissa  | uint256 | undefined |
| newLiquidationIncentiveMantissa  | uint256 | undefined |

### NewMaxAssets

```solidity
event NewMaxAssets(uint256 oldMaxAssets, uint256 newMaxAssets)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldMaxAssets  | uint256 | undefined |
| newMaxAssets  | uint256 | undefined |

### NewPauseGuardian

```solidity
event NewPauseGuardian(address oldPauseGuardian, address newPauseGuardian)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldPauseGuardian  | address | undefined |
| newPauseGuardian  | address | undefined |

### NewPriceOracle

```solidity
event NewPriceOracle(contract PriceOracle oldPriceOracle, contract PriceOracle newPriceOracle)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldPriceOracle  | contract PriceOracle | undefined |
| newPriceOracle  | contract PriceOracle | undefined |



