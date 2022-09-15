# ComptrollerV3Storage









## Methods

### _borrowGuardianPaused

```solidity
function _borrowGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### _mintGuardianPaused

```solidity
function _mintGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### seizeGuardianPaused

```solidity
function seizeGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferGuardianPaused

```solidity
function transferGuardianPaused() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |




