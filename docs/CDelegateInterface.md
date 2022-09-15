# CDelegateInterface









## Methods

### _becomeImplementation

```solidity
function _becomeImplementation(bytes data) external nonpayable
```

Called by the delegator on a delegate to initialize it for duty

*Should revert if any issues arise which make it unfit for delegation*

#### Parameters

| Name | Type | Description |
|---|---|---|
| data | bytes | The encoded bytes data for any initialization |

### _resignImplementation

```solidity
function _resignImplementation() external nonpayable
```

Called by the delegator on a delegate to forfeit its responsibility




### implementation

```solidity
function implementation() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |




