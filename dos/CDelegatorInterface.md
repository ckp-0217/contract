# CDelegatorInterface









## Methods

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

### implementation

```solidity
function implementation() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### NewImplementation

```solidity
event NewImplementation(address oldImplementation, address newImplementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldImplementation  | address | undefined |
| newImplementation  | address | undefined |



