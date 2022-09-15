# Reservoir

*Compound*

> Reservoir Contract

Distributes a token to a different contract at a fixed rate.

*This contract must be poked via the `drip()` function every so often.*

## Methods

### drip

```solidity
function drip() external nonpayable returns (uint256)
```

Drips the maximum amount of tokens to match the drip rate since inception

*Note: this will only drip up to the amount of tokens available.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### dripRate

```solidity
function dripRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### dripStart

```solidity
function dripStart() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### dripped

```solidity
function dripped() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### target

```solidity
function target() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### token

```solidity
function token() external view returns (contract EIP20Interface)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract EIP20Interface | undefined |




