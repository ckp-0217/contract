# Unitroller



> ComptrollerCore



*Storage for the comptroller is at this address, while execution is delegated to the `comptrollerImplementation`. CTokens should reference this contract as their comptroller.*

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

### _acceptImplementation

```solidity
function _acceptImplementation() external nonpayable returns (uint256)
```

Accepts new implementation of comptroller. msg.sender must be pendingImplementation

*Admin function for new implementation to accept it&#39;s role as implementation*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setPendingAdmin

```solidity
function _setPendingAdmin(address newPendingAdmin) external nonpayable returns (uint256)
```

Begins transfer of admin rights. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.

*Admin function to begin change of admin. The newPendingAdmin must call `_acceptAdmin` to finalize the transfer.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newPendingAdmin | address | New pending admin. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### _setPendingImplementation

```solidity
function _setPendingImplementation(address newPendingImplementation) external nonpayable returns (uint256)
```

* Admin Functions **



#### Parameters

| Name | Type | Description |
|---|---|---|
| newPendingImplementation | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### admin

```solidity
function admin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### comptrollerImplementation

```solidity
function comptrollerImplementation() external view returns (address)
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



## Events

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

### NewAdmin

```solidity
event NewAdmin(address oldAdmin, address newAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldAdmin  | address | undefined |
| newAdmin  | address | undefined |

### NewImplementation

```solidity
event NewImplementation(address oldImplementation, address newImplementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldImplementation  | address | undefined |
| newImplementation  | address | undefined |

### NewPendingAdmin

```solidity
event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldPendingAdmin  | address | undefined |
| newPendingAdmin  | address | undefined |

### NewPendingImplementation

```solidity
event NewPendingImplementation(address oldPendingImplementation, address newPendingImplementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oldPendingImplementation  | address | undefined |
| newPendingImplementation  | address | undefined |



