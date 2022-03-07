/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETHGateway, WETHGatewayInterface } from "../WETHGateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IllegalArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "IllegalState",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH9",
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
        name: "alchemist",
        type: "address",
      },
      {
        internalType: "address",
        name: "yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumAmountOut",
        type: "uint256",
      },
    ],
    name: "depositUnderlying",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        name: "alchemist",
        type: "address",
      },
    ],
    name: "refreshAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alchemist",
        type: "address",
      },
      {
        internalType: "address",
        name: "yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumAmountOut",
        type: "uint256",
      },
    ],
    name: "withdrawUnderlying",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610b88380380610b8883398101604081905261002f91610099565b61003833610049565b6001600160a01b03166080526100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b608051610a7b61010d6000396000818160740152818161014a015281816102140152818161030901528181610398015281816104f2015261066f0152610a7b6000f3fe6080604052600436106100645760003560e01c80630df6cee0146100b85780636860e4e6146100d8578063715018a6146100f85780638da5cb5b1461010d578063ad5c464814610138578063f2fde38b1461016c578063fe65b98a1461018c57600080fd5b366100b357336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100b1576040516282b42960e81b815260040160405180910390fd5b005b600080fd5b3480156100c457600080fd5b506100b16100d33660046107d1565b61019f565b3480156100e457600080fd5b506100b16100f336600461082c565b610493565b34801561010457600080fd5b506100b1610563565b34801561011957600080fd5b5061012261059e565b60405161012f9190610850565b60405180910390f35b34801561014457600080fd5b506101227f000000000000000000000000000000000000000000000000000000000000000081565b34801561017857600080fd5b506100b161018736600461082c565b6105ad565b6100b161019a3660046107d1565b61064d565b604051635a5efc8b60e01b81526000906001600160a01b03871690635a5efc8b906101ce908890600401610850565b6101e060405180830381865afa1580156101ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021091906108cc565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b03161461026857604051630134249960e71b815260040160405180910390fd5b604051632e5a3b8f60e21b81523360048201526001600160a01b038681166024830152604482018690523060648301526084820184905287169063b968ee3c9060a4016020604051808303816000875af11580156102ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ee91906109a1565b506040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319061033e903090600401610850565b602060405180830381865afa15801561035b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037f91906109a1565b604051632e1a7d4d60e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b1580156103e457600080fd5b505af11580156103f8573d6000803e3d6000fd5b5050604080516000808252602082019283905293506001600160a01b0388169250849161042591906109ba565b60006040518083038185875af1925050503d8060008114610462576040519150601f19603f3d011682016040523d82523d6000602084013e610467565b606091505b505090508061048957604051634a613c4160e01b815260040160405180910390fd5b5050505050505050565b3361049c61059e565b6001600160a01b0316146104cb5760405162461bcd60e51b81526004016104c2906109f5565b60405180910390fd5b60405163095ea7b360e01b81526001600160a01b03828116600483015260001960248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af115801561053b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055f9190610a2a565b5050565b3361056c61059e565b6001600160a01b0316146105925760405162461bcd60e51b81526004016104c2906109f5565b61059c600061076c565b565b6000546001600160a01b031690565b336105b661059e565b6001600160a01b0316146105dc5760405162461bcd60e51b81526004016104c2906109f5565b6001600160a01b0381166106415760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104c2565b61064a8161076c565b50565b34831461066d57604051630134249960e71b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156106c857600080fd5b505af11580156106dc573d6000803e3d6000fd5b5050604051635efd4dd760e11b81526001600160a01b038881166004830152602482018890528681166044830152606482018690528916935063bdfa9bae925060840190506020604051808303816000875af1158015610740573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076491906109a1565b505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461064a57600080fd5b600080600080600060a086880312156107e957600080fd5b85356107f4816107bc565b94506020860135610804816107bc565b935060408601359250606086013561081b816107bc565b949793965091946080013592915050565b60006020828403121561083e57600080fd5b8135610849816107bc565b9392505050565b6001600160a01b0391909116815260200190565b6040516101e081016001600160401b038111828210171561089557634e487b7160e01b600052604160045260246000fd5b60405290565b805160ff811681146108ac57600080fd5b919050565b80516108ac816107bc565b805180151581146108ac57600080fd5b60006101e082840312156108df57600080fd5b6108e7610864565b6108f08361089b565b81526108fe602084016108b1565b602082015261090f604084016108b1565b6040820152606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c06109968185016108bc565b908201529392505050565b6000602082840312156109b357600080fd5b5051919050565b6000825160005b818110156109db57602081860181015185830152016109c1565b818111156109ea576000828501525b509190910192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215610a3c57600080fd5b610849826108bc56fea2646970667358221220d0e780db81d2dc7b18776655a3d88d14ce5d8578c993d95ea11ff40ab52fd67d64736f6c634300080b0033";

export class WETHGateway__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETHGateway> {
    return super.deploy(weth, overrides || {}) as Promise<WETHGateway>;
  }
  getDeployTransaction(
    weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(weth, overrides || {});
  }
  attach(address: string): WETHGateway {
    return super.attach(address) as WETHGateway;
  }
  connect(signer: Signer): WETHGateway__factory {
    return super.connect(signer) as WETHGateway__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHGatewayInterface {
    return new utils.Interface(_abi) as WETHGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHGateway {
    return new Contract(address, _abi, signerOrProvider) as WETHGateway;
  }
}
