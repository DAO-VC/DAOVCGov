/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Loot } from "./Loot";

export class LootFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Loot> {
    return super.deploy(overrides || {}) as Promise<Loot>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Loot {
    return super.attach(address) as Loot;
  }
  connect(signer: Signer): LootFactory {
    return super.connect(signer) as LootFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Loot {
    return new Contract(address, _abi, signerOrProvider) as Loot;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baal",
    outputs: [
      {
        internalType: "contract IBaal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600881526754656d706c61746560c01b6020808301918252835180850190945260018452601560fa1b9084015281519192916200005b916003916200016e565b508051620000719060049060208401906200016e565b5050600554610100900460ff169050620000925760055460ff16156200009c565b6200009c62000141565b620001045760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600554610100900460ff1615801562000127576005805461ffff19166101011790555b80156200013a576005805461ff00191690555b5062000251565b600062000159306200015f60201b620008961760201c565b15905090565b6001600160a01b03163b151590565b8280546200017c9062000214565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b600181811c908216806200022957607f821691505b602082108114156200024b57634e487b7160e01b600052602260045260246000fd5b50919050565b61176580620002616000396000f3fe608060405234801561001057600080fd5b50600436106100eb5760003560e01c806370a082311161009257806370a08231146101a05780637ecebe00146101c957806395d89b41146101e95780639dc29fac146101f15780639fd5a6cf14610204578063a457c2d714610217578063a9059cbb1461022a578063dd62ed3e1461023d578063e5a2a2a51461025057600080fd5b806306fdde03146100f0578063095ea7b31461010e57806318160ddd1461013157806323b872dd14610143578063313ce56714610156578063395093511461016557806340c10f1914610178578063562d190d1461018d575b600080fd5b6100f861027b565b60405161010591906115ef565b60405180910390f35b61012161011c3660046114a3565b61030d565b6040519015158152602001610105565b6002545b604051908152602001610105565b6101216101513660046113c1565b610325565b60405160128152602001610105565b6101216101733660046114a3565b610368565b61018b6101863660046114a3565b6103a2565b005b61018b61019b3660046114ef565b6103e3565b6101356101ae36600461136c565b6001600160a01b031660009081526020819052604090205490565b6101356101d736600461136c565b60086020526000908152604090205481565b6100f86104dc565b61018b6101ff3660046114a3565b6104eb565b61018b6102123660046113fd565b61051f565b6101216102253660046114a3565b6107cb565b6101216102383660046114a3565b61085d565b61013561024b36600461138e565b61086b565b600954610263906001600160a01b031681565b6040516001600160a01b039091168152602001610105565b60606006805461028a90611692565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690611692565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b60003361031b8185856108a5565b5060019392505050565b60006103328484846109c9565b600061033e853361086b565b9050600019811461035d5761035d8533610358868561167b565b6108a5565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061031b9082908690610358908790611663565b6009546001600160a01b031633146103d55760405162461bcd60e51b81526004016103cc90611644565b60405180910390fd5b6103df8282610b91565b5050565b600554610100900460ff166103fe5760055460ff1615610406565b610406610c6a565b6104695760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103cc565b600554610100900460ff1615801561048b576005805461ffff19166101011790555b600980546001600160a01b0319163317905582516104b090600690602086019061122a565b5081516104c490600790602085019061122a565b5080156104d7576005805461ff00191690555b505050565b60606007805461028a90611692565b6009546001600160a01b031633146105155760405162461bcd60e51b81526004016103cc90611644565b6103df8282610c7b565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86660066040516105519190611553565b6040805191829003822060208084019490945282820152466060830152306080808401919091528151808403909101815260a0830182528051908401206001600160a01b038b81166000818152600887528481208054600181019091557f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960c088015260e0870192909252918c1661010086015261012085018b90526101408501526101608085018a90528351808603909101815261018085019093528251929094019190912061190160f01b6101a08401526101a283018290526101c2830181905290935091906101e201604051602081830303815290604052805190602001209050600061069986868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050610dc39050565b90506001600160a01b0381166106de5760405162461bcd60e51b815260206004820152600a602482015269217369676e61746f727960b01b60448201526064016103cc565b896001600160a01b0316816001600160a01b03161461072d5760405162461bcd60e51b815260206004820152600b60248201526a08585d5d1a1bdc9a5e995960aa1b60448201526064016103cc565b5050508342111561076a5760405162461bcd60e51b8152602060048201526007602482015266195e1c1a5c995960ca1b60448201526064016103cc565b6107758787876108a5565b856001600160a01b0316876001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925876040516107ba91815260200190565b60405180910390a350505050505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156108505760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103cc565b61035d82868684036108a5565b60003361031b8185856109c9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03163b151590565b6001600160a01b0383166109075760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103cc565b6001600160a01b0382166109685760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103cc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610a2d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103cc565b6001600160a01b038216610a8f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103cc565b610a9a838383610de7565b6001600160a01b03831660009081526020819052604090205481811015610b125760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103cc565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b49908490611663565b92505081905550826001600160a01b0316846001600160a01b031660008051602061171083398151915284604051610b8391815260200190565b60405180910390a350505050565b6001600160a01b038216610be75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103cc565b610bf360008383610de7565b8060026000828254610c059190611663565b90915550506001600160a01b03821660009081526020819052604081208054839290610c32908490611663565b90915550506040518181526001600160a01b038316906000906000805160206117108339815191529060200160405180910390a35050565b6000610c7530610896565b15905090565b6001600160a01b038216610cdb5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103cc565b610ce782600083610de7565b6001600160a01b03821660009081526020819052604090205481811015610d5b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103cc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d8a90849061167b565b90915550506040518281526000906001600160a01b038516906000805160206117108339815191529060200160405180910390a3505050565b6000806000610dd28585610ee5565b91509150610ddf81610f55565b509392505050565b6001600160a01b0383161580610e1957506009546001600160a01b031633148015610e1957506001600160a01b038216155b80610ea95750600960009054906101000a90046001600160a01b03166001600160a01b0316630ac419b26040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610e6f57600080fd5b505af1158015610e83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea791906114cd565b155b6104d75760405162461bcd60e51b815260206004820152600d60248201526c217472616e7366657261626c6560981b60448201526064016103cc565b600080825160411415610f1c5760208301516040840151606085015160001a610f108782858561110e565b94509450505050610f4e565b825160401415610f465760208301516040840151610f3b8683836111f1565b935093505050610f4e565b506000905060025b9250929050565b6000816004811115610f6957610f696116e3565b1415610f725750565b6001816004811115610f8657610f866116e3565b1415610fcf5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016103cc565b6002816004811115610fe357610fe36116e3565b14156110315760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103cc565b6003816004811115611045576110456116e3565b141561109e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103cc565b60048160048111156110b2576110b26116e3565b141561110b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016103cc565b50565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b0383111561113b57506000905060036111e8565b8460ff16601b1415801561115357508460ff16601c14155b1561116457506000905060046111e8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156111b8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111e1576000600192509250506111e8565b9150600090505b94509492505050565b6000806001600160ff1b0383168161120e60ff86901c601b611663565b905061121c8782888561110e565b935093505050935093915050565b82805461123690611692565b90600052602060002090601f016020900481019282611258576000855561129e565b82601f1061127157805160ff191683800117855561129e565b8280016001018555821561129e579182015b8281111561129e578251825591602001919060010190611283565b506112aa9291506112ae565b5090565b5b808211156112aa57600081556001016112af565b80356001600160a01b03811681146112da57600080fd5b919050565b600082601f8301126112f057600080fd5b813567ffffffffffffffff8082111561130b5761130b6116f9565b604051601f8301601f19908116603f01168101908282118183101715611333576113336116f9565b8160405283815286602085880101111561134c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561137e57600080fd5b611387826112c3565b9392505050565b600080604083850312156113a157600080fd5b6113aa836112c3565b91506113b8602084016112c3565b90509250929050565b6000806000606084860312156113d657600080fd5b6113df846112c3565b92506113ed602085016112c3565b9150604084013590509250925092565b60008060008060008060a0878903121561141657600080fd5b61141f876112c3565b955061142d602088016112c3565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561145857600080fd5b818901915089601f83011261146c57600080fd5b81358181111561147b57600080fd5b8a602082850101111561148d57600080fd5b6020830194508093505050509295509295509295565b600080604083850312156114b657600080fd5b6114bf836112c3565b946020939093013593505050565b6000602082840312156114df57600080fd5b8151801515811461138757600080fd5b6000806040838503121561150257600080fd5b823567ffffffffffffffff8082111561151a57600080fd5b611526868387016112df565b9350602085013591508082111561153c57600080fd5b50611549858286016112df565b9150509250929050565b600080835481600182811c91508083168061156f57607f831692505b602080841082141561158f57634e487b7160e01b86526022600452602486fd5b8180156115a357600181146115b4576115e1565b60ff198616895284890196506115e1565b60008a81526020902060005b868110156115d95781548b8201529085019083016115c0565b505084890196505b509498975050505050505050565b600060208083528351808285015260005b8181101561161c57858101830151858201604001528201611600565b8181111561162e576000604083870101525b50601f01601f1916929092016040019392505050565b602080825260059082015264042c2eae8d60db1b604082015260600190565b60008219821115611676576116766116cd565b500190565b60008282101561168d5761168d6116cd565b500390565b600181811c908216806116a657607f821691505b602082108114156116c757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b9b3c4f53699b045874e4385ed9ccfcad3f35de0a21e3794ca8ee44ef14d1aa564736f6c63430008070033";
