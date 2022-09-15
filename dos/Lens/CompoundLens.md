# CompoundLens









## Methods

### cTokenBalances

```solidity
function cTokenBalances(contract CToken cToken, address payable account) external nonpayable returns (struct CompoundLens.CTokenBalances)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | undefined |
| account | address payable | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CTokenBalances | undefined |

### cTokenBalancesAll

```solidity
function cTokenBalancesAll(contract CToken[] cTokens, address payable account) external nonpayable returns (struct CompoundLens.CTokenBalances[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokens | contract CToken[] | undefined |
| account | address payable | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CTokenBalances[] | undefined |

### cTokenMetadata

```solidity
function cTokenMetadata(contract CToken cToken) external nonpayable returns (struct CompoundLens.CTokenMetadata)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CTokenMetadata | undefined |

### cTokenMetadataAll

```solidity
function cTokenMetadataAll(contract CToken[] cTokens) external nonpayable returns (struct CompoundLens.CTokenMetadata[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokens | contract CToken[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CTokenMetadata[] | undefined |

### cTokenUnderlyingPrice

```solidity
function cTokenUnderlyingPrice(contract CToken cToken) external nonpayable returns (struct CompoundLens.CTokenUnderlyingPrice)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cToken | contract CToken | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CTokenUnderlyingPrice | undefined |

### cTokenUnderlyingPriceAll

```solidity
function cTokenUnderlyingPriceAll(contract CToken[] cTokens) external nonpayable returns (struct CompoundLens.CTokenUnderlyingPrice[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cTokens | contract CToken[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CTokenUnderlyingPrice[] | undefined |

### getAccountLimits

```solidity
function getAccountLimits(contract ComptrollerLensInterface comptroller, address account) external nonpayable returns (struct CompoundLens.AccountLimits)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| comptroller | contract ComptrollerLensInterface | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.AccountLimits | undefined |

### getCompBalanceMetadata

```solidity
function getCompBalanceMetadata(contract Comp comp, address account) external view returns (struct CompoundLens.CompBalanceMetadata)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| comp | contract Comp | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CompBalanceMetadata | undefined |

### getCompBalanceMetadataExt

```solidity
function getCompBalanceMetadataExt(contract Comp comp, contract ComptrollerLensInterface comptroller, address account) external nonpayable returns (struct CompoundLens.CompBalanceMetadataExt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| comp | contract Comp | undefined |
| comptroller | contract ComptrollerLensInterface | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CompBalanceMetadataExt | undefined |

### getCompVotes

```solidity
function getCompVotes(contract Comp comp, address account, uint32[] blockNumbers) external view returns (struct CompoundLens.CompVotes[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| comp | contract Comp | undefined |
| account | address | undefined |
| blockNumbers | uint32[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.CompVotes[] | undefined |

### getGovBravoProposals

```solidity
function getGovBravoProposals(contract GovernorBravoInterface governor, uint256[] proposalIds) external view returns (struct CompoundLens.GovBravoProposal[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| governor | contract GovernorBravoInterface | undefined |
| proposalIds | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.GovBravoProposal[] | undefined |

### getGovBravoReceipts

```solidity
function getGovBravoReceipts(contract GovernorBravoInterface governor, address voter, uint256[] proposalIds) external view returns (struct CompoundLens.GovBravoReceipt[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| governor | contract GovernorBravoInterface | undefined |
| voter | address | undefined |
| proposalIds | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.GovBravoReceipt[] | undefined |

### getGovProposals

```solidity
function getGovProposals(contract GovernorAlpha governor, uint256[] proposalIds) external view returns (struct CompoundLens.GovProposal[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| governor | contract GovernorAlpha | undefined |
| proposalIds | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.GovProposal[] | undefined |

### getGovReceipts

```solidity
function getGovReceipts(contract GovernorAlpha governor, address voter, uint256[] proposalIds) external view returns (struct CompoundLens.GovReceipt[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| governor | contract GovernorAlpha | undefined |
| voter | address | undefined |
| proposalIds | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CompoundLens.GovReceipt[] | undefined |




