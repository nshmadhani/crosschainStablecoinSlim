/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WMATIC, WMATICInterface } from "../WMATIC";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    payable: false,
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
    constant: true,
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
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
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
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
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
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
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
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
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
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162000ced38038062000ced8339818101604052602081101561003557600080fd5b5051604080518082018252600d81526c57726170706564204d6174696360981b602082810191825283518085019094526006845265774d4154494360d01b90840152815191929160129161008c9160039190610223565b5081516100a0906004906020850190610223565b506005805460ff191660ff92909216919091179055506100c2905033826100c8565b506102be565b6001600160a01b038216610123576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61013c816002546101c260201b6108881790919060201c565b6002556001600160a01b0382166000908152602081815260409091205461016c9183906108886101c2821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008282018381101561021c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061026457805160ff1916838001178555610291565b82800160010185558215610291579182015b82811115610291578251825591602001919060010190610276565b5061029d9291506102a1565b5090565b6102bb91905b8082111561029d57600081556001016102a7565b90565b610a1f80620002ce6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038c565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610392565b6101e361041f565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610428565b6101936004803603602081101561023b57600080fd5b50356001600160a01b031661047c565b6100d6610497565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104f8565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610566565b610193600480360360408110156102c157600080fd5b506001600160a01b038135811691602001351661057a565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105a5565b84846105a9565b50600192915050565b60025490565b600061039f848484610695565b610415846103ab6105a5565b61041085604051806060016040528060288152602001610955602891396001600160a01b038a166000908152600160205260408120906103e96105a5565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6107f116565b6105a9565b5060019392505050565b60055460ff1690565b60006103836104356105a5565b8461041085600160006104466105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61088816565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836105056105a5565b84610410856040518060600160405280602581526020016109c6602591396001600061052f6105a5565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6107f116565b60006103836105736105a5565b8484610695565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105ee5760405162461bcd60e51b81526004018080602001828103825260248152602001806109a26024913960400191505060405180910390fd5b6001600160a01b0382166106335760405162461bcd60e51b815260040180806020018281038252602281526020018061090d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106da5760405162461bcd60e51b815260040180806020018281038252602581526020018061097d6025913960400191505060405180910390fd5b6001600160a01b03821661071f5760405162461bcd60e51b81526004018080602001828103825260238152602001806108ea6023913960400191505060405180910390fd5b6107628160405180606001604052806026815260200161092f602691396001600160a01b038616600090815260208190526040902054919063ffffffff6107f116565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610797908263ffffffff61088816565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108805760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561084557818101518382015260200161082d565b50505050905090810190601f1680156108725780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156108e2576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a723158208bd48bafc12ccd274d11d579d059e32d39ec360932320bb179d6bd9b7edc4d2c64736f6c63430005110032";

type WMATICConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WMATICConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WMATIC__factory extends ContractFactory {
  constructor(...args: WMATICConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "WMATIC";
  }

  deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WMATIC> {
    return super.deploy(initialSupply, overrides || {}) as Promise<WMATIC>;
  }
  getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  attach(address: string): WMATIC {
    return super.attach(address) as WMATIC;
  }
  connect(signer: Signer): WMATIC__factory {
    return super.connect(signer) as WMATIC__factory;
  }
  static readonly contractName: "WMATIC";
  public readonly contractName: "WMATIC";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WMATICInterface {
    return new utils.Interface(_abi) as WMATICInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WMATIC {
    return new Contract(address, _abi, signerOrProvider) as WMATIC;
  }
}
