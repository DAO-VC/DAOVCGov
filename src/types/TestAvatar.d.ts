/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestAvatarInterface extends ethers.utils.Interface {
  functions: {
    "disableModule(address,address)": FunctionFragment;
    "enableModule(address)": FunctionFragment;
    "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
    "getModulesPaginated(address,uint256)": FunctionFragment;
    "isModuleEnabled(address)": FunctionFragment;
    "module()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "disableModule",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableModule",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransactionFromModule",
    values: [string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransactionFromModuleReturnData",
    values: [string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getModulesPaginated",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isModuleEnabled",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "module", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "disableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransactionFromModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransactionFromModuleReturnData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getModulesPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isModuleEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "module", data: BytesLike): Result;

  events: {};
}

export class TestAvatar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestAvatarInterface;

  functions: {
    disableModule(
      arg0: string,
      arg1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "disableModule(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    enableModule(
      _module: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "enableModule(address)"(
      _module: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "execTransactionFromModule(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getModulesPaginated(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    "getModulesPaginated(address,uint256)"(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    isModuleEnabled(
      _module: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isModuleEnabled(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    module(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "module()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  disableModule(
    arg0: string,
    arg1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "disableModule(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  enableModule(
    _module: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "enableModule(address)"(
    _module: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  execTransactionFromModule(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "execTransactionFromModule(address,uint256,bytes,uint8)"(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  execTransactionFromModuleReturnData(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)"(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getModulesPaginated(
    arg0: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    array: string[];
    next: string;
    0: string[];
    1: string;
  }>;

  "getModulesPaginated(address,uint256)"(
    arg0: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    array: string[];
    next: string;
    0: string[];
    1: string;
  }>;

  isModuleEnabled(_module: string, overrides?: CallOverrides): Promise<boolean>;

  "isModuleEnabled(address)"(
    _module: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  module(overrides?: CallOverrides): Promise<string>;

  "module()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    disableModule(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "disableModule(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableModule(_module: string, overrides?: CallOverrides): Promise<void>;

    "enableModule(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<void>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "execTransactionFromModule(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      success: boolean;
      returnData: string;
      0: boolean;
      1: string;
    }>;

    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      success: boolean;
      returnData: string;
      0: boolean;
      1: string;
    }>;

    getModulesPaginated(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    "getModulesPaginated(address,uint256)"(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    isModuleEnabled(
      _module: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isModuleEnabled(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    module(overrides?: CallOverrides): Promise<string>;

    "module()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    disableModule(
      arg0: string,
      arg1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "disableModule(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    enableModule(_module: string, overrides?: Overrides): Promise<BigNumber>;

    "enableModule(address)"(
      _module: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "execTransactionFromModule(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getModulesPaginated(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getModulesPaginated(address,uint256)"(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isModuleEnabled(
      _module: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isModuleEnabled(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    module(overrides?: CallOverrides): Promise<BigNumber>;

    "module()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    disableModule(
      arg0: string,
      arg1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "disableModule(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    enableModule(
      _module: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "enableModule(address)"(
      _module: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    execTransactionFromModule(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "execTransactionFromModule(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    execTransactionFromModuleReturnData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getModulesPaginated(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getModulesPaginated(address,uint256)"(
      arg0: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isModuleEnabled(
      _module: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isModuleEnabled(address)"(
      _module: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    module(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "module()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
