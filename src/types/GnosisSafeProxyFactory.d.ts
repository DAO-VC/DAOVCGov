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

interface GnosisSafeProxyFactoryInterface extends ethers.utils.Interface {
  functions: {
    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)": FunctionFragment;
    "createProxy(address,bytes)": FunctionFragment;
    "createProxyWithCallback(address,bytes,uint256,address)": FunctionFragment;
    "createProxyWithNonce(address,bytes,uint256)": FunctionFragment;
    "proxyCreationCode()": FunctionFragment;
    "proxyRuntimeCode()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateCreateProxyWithNonceAddress",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxy",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyWithCallback",
    values: [string, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyWithNonce",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyCreationCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxyRuntimeCode",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateCreateProxyWithNonceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyWithCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyWithNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyCreationCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyRuntimeCode",
    data: BytesLike
  ): Result;

  events: {
    "ProxyCreation(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
}

export class GnosisSafeProxyFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GnosisSafeProxyFactoryInterface;

  functions: {
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createProxy(address,bytes)"(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createProxyWithCallback(address,bytes,uint256,address)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createProxyWithNonce(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    proxyCreationCode(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "proxyCreationCode()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "proxyRuntimeCode()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  calculateCreateProxyWithNonceAddress(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "calculateCreateProxyWithNonceAddress(address,bytes,uint256)"(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createProxy(
    singleton: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createProxy(address,bytes)"(
    singleton: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createProxyWithCallback(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    callback: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createProxyWithCallback(address,bytes,uint256,address)"(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    callback: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createProxyWithNonce(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createProxyWithNonce(address,bytes,uint256)"(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  proxyCreationCode(overrides?: CallOverrides): Promise<string>;

  "proxyCreationCode()"(overrides?: CallOverrides): Promise<string>;

  proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;

  "proxyRuntimeCode()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "createProxy(address,bytes)"(
      singleton: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createProxyWithCallback(address,bytes,uint256,address)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createProxyWithNonce(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    proxyCreationCode(overrides?: CallOverrides): Promise<string>;

    "proxyCreationCode()"(overrides?: CallOverrides): Promise<string>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;

    "proxyRuntimeCode()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ProxyCreation(proxy: null, singleton: null): EventFilter;
  };

  estimateGas: {
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createProxy(address,bytes)"(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createProxyWithCallback(address,bytes,uint256,address)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createProxyWithNonce(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    proxyCreationCode(overrides?: CallOverrides): Promise<BigNumber>;

    "proxyCreationCode()"(overrides?: CallOverrides): Promise<BigNumber>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<BigNumber>;

    "proxyRuntimeCode()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createProxy(address,bytes)"(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createProxyWithCallback(address,bytes,uint256,address)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createProxyWithNonce(address,bytes,uint256)"(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    proxyCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proxyCreationCode()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proxyRuntimeCode()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
