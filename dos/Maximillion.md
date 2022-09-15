# Maximillion

*Compound*

> Compound&#39;s Maximillion Contract





## Methods

### cEther

```solidity
function cEther() external view returns (contract CEther)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract CEther | undefined |

### repayBehalf

```solidity
function repayBehalf(address borrower) external payable
```

msg.sender sends Ether to repay an account&#39;s borrow in the cEther market

*The provided Ether is applied towards the borrow balance, any excess is refunded*

#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower | address | The address of the borrower account to repay on behalf of |

### repayBehalfExplicit

```solidity
function repayBehalfExplicit(address borrower, contract CEther cEther_) external payable
```

msg.sender sends Ether to repay an account&#39;s borrow in a cEther market

*The provided Ether is applied towards the borrow balance, any excess is refunded*

#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower | address | The address of the borrower account to repay on behalf of |
| cEther_ | contract CEther | The address of the cEther contract to repay in |




