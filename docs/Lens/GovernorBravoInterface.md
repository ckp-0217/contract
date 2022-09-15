# GovernorBravoInterface









## Methods

### getActions

```solidity
function getActions(uint256 proposalId) external view returns (address[] targets, uint256[] values, string[] signatures, bytes[] calldatas)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| targets | address[] | undefined |
| values | uint256[] | undefined |
| signatures | string[] | undefined |
| calldatas | bytes[] | undefined |

### getReceipt

```solidity
function getReceipt(uint256 proposalId, address voter) external view returns (struct GovernorBravoInterface.Receipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalId | uint256 | undefined |
| voter | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | GovernorBravoInterface.Receipt | undefined |

### proposals

```solidity
function proposals(uint256 proposalId) external view returns (struct GovernorBravoInterface.Proposal)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| proposalId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | GovernorBravoInterface.Proposal | undefined |




