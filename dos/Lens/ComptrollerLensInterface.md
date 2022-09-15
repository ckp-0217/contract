# ComptrollerLensInterface









## Methods

### borrowCaps

```solidity
function borrowCaps(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimComp

```solidity
function claimComp(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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

### compBorrowSpeeds

```solidity
function compBorrowSpeeds(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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

### compSupplySpeeds

```solidity
function compSupplySpeeds(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getAccountLiquidity

```solidity
function getAccountLiquidity(address) external view returns (uint256, uint256, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |

### getAssetsIn

```solidity
function getAssetsIn(address) external view returns (contract CToken[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract CToken[] | undefined |

### markets

```solidity
function markets(address) external view returns (bool, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |
| _1 | uint256 | undefined |

### oracle

```solidity
function oracle() external view returns (contract PriceOracle)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract PriceOracle | undefined |




