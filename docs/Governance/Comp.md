# Comp









## Methods

### DELEGATION_TYPEHASH

```solidity
function DELEGATION_TYPEHASH() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### DOMAIN_TYPEHASH

```solidity
function DOMAIN_TYPEHASH() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### allowance

```solidity
function allowance(address account, address spender) external view returns (uint256)
```

Get the number of tokens `spender` is approved to spend on behalf of `account`



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account holding the funds |
| spender | address | The address of the account spending the funds |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 rawAmount) external nonpayable returns (bool)
```

Approve `spender` to transfer up to `amount` from `src`

*This will overwrite the approval amount for `spender` and is subject to issues noted [here](https://eips.ethereum.org/EIPS/eip-20#approve)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | The address of the account which may transfer tokens |
| rawAmount | uint256 | The number of tokens that are approved (2^256-1 means infinite) |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

Get the number of tokens held by the `account`



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account to get the balance of |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### checkpoints

```solidity
function checkpoints(address, uint32) external view returns (uint32 fromBlock, uint96 votes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| fromBlock | uint32 | undefined |
| votes | uint96 | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### delegate

```solidity
function delegate(address delegatee) external nonpayable
```

Delegate votes from `msg.sender` to `delegatee`



#### Parameters

| Name | Type | Description |
|---|---|---|
| delegatee | address | The address to delegate votes to |

### delegateBySig

```solidity
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Delegates votes from signatory to `delegatee`



#### Parameters

| Name | Type | Description |
|---|---|---|
| delegatee | address | The address to delegate votes to |
| nonce | uint256 | The contract state required to match the signature |
| expiry | uint256 | The time at which to expire the signature |
| v | uint8 | The recovery byte of the signature |
| r | bytes32 | Half of the ECDSA signature pair |
| s | bytes32 | Half of the ECDSA signature pair |

### delegates

```solidity
function delegates(address) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getCurrentVotes

```solidity
function getCurrentVotes(address account) external view returns (uint96)
```

Gets the current votes balance for `account`



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address to get votes balance |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint96 | undefined |

### getPriorVotes

```solidity
function getPriorVotes(address account, uint256 blockNumber) external view returns (uint96)
```

Determine the prior number of votes for an account as of a block number

*Block number must be a finalized block or else this function will revert to prevent misinformation.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The address of the account to check |
| blockNumber | uint256 | The block number to get the vote balance at |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint96 | undefined |

### name

```solidity
function name() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### nonces

```solidity
function nonces(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### numCheckpoints

```solidity
function numCheckpoints(address) external view returns (uint32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address dst, uint256 rawAmount) external nonpayable returns (bool)
```

Transfer `amount` tokens from `msg.sender` to `dst`



#### Parameters

| Name | Type | Description |
|---|---|---|
| dst | address | The address of the destination account |
| rawAmount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address src, address dst, uint256 rawAmount) external nonpayable returns (bool)
```

Transfer `amount` tokens from `src` to `dst`



#### Parameters

| Name | Type | Description |
|---|---|---|
| src | address | The address of the source account |
| dst | address | The address of the destination account |
| rawAmount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| amount  | uint256 | undefined |

### DelegateChanged

```solidity
event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| delegator `indexed` | address | undefined |
| fromDelegate `indexed` | address | undefined |
| toDelegate `indexed` | address | undefined |

### DelegateVotesChanged

```solidity
event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| delegate `indexed` | address | undefined |
| previousBalance  | uint256 | undefined |
| newBalance  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| amount  | uint256 | undefined |



