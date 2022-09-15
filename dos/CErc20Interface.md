# CErc20Interface









## Methods

### _addReserves

```solidity
function _addReserves(uint256 addAmount) external nonpayable returns (uint256)
```

* Admin Functions **



#### Parameters

| Name | Type | Description |
|---|---|---|
| addAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### borrow

```solidity
function borrow(uint256 borrowAmount) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| borrowAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### liquidateBorrow

```solidity
function liquidateBorrow(address borrower, uint256 repayAmount, contract CTokenInterface cTokenCollateral) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower | address | undefined |
| repayAmount | uint256 | undefined |
| cTokenCollateral | contract CTokenInterface | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint

```solidity
function mint(uint256 mintAmount) external nonpayable returns (uint256)
```

* User Interface **



#### Parameters

| Name | Type | Description |
|---|---|---|
| mintAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### redeem

```solidity
function redeem(uint256 redeemTokens) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemTokens | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### redeemUnderlying

```solidity
function redeemUnderlying(uint256 redeemAmount) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### repayBorrow

```solidity
function repayBorrow(uint256 repayAmount) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| repayAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### repayBorrowBehalf

```solidity
function repayBorrowBehalf(address borrower, uint256 repayAmount) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower | address | undefined |
| repayAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### sweepToken

```solidity
function sweepToken(contract EIP20NonStandardInterface token) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract EIP20NonStandardInterface | undefined |

### underlying

```solidity
function underlying() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |




