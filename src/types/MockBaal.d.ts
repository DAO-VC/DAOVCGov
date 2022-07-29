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

interface MockBaalInterface extends ethers.utils.Interface {
  functions: {
    "burnLoot(address,uint256)": FunctionFragment;
    "lootPaused()": FunctionFragment;
    "lootToken()": FunctionFragment;
    "mintLoot(address,uint256)": FunctionFragment;
    "setLootPaused(bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burnLoot",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lootPaused",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lootToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintLoot",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLootPaused",
    values: [boolean]
  ): string;

  decodeFunctionResult(functionFragment: "burnLoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lootPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lootToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintLoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLootPaused",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockBaal extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockBaalInterface;

  functions: {
    burnLoot(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burnLoot(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lootPaused(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "lootPaused()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    lootToken(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "lootToken()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    mintLoot(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintLoot(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLootPaused(
      paused: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLootPaused(bool)"(
      paused: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  burnLoot(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burnLoot(address,uint256)"(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lootPaused(overrides?: CallOverrides): Promise<boolean>;

  "lootPaused()"(overrides?: CallOverrides): Promise<boolean>;

  lootToken(overrides?: CallOverrides): Promise<string>;

  "lootToken()"(overrides?: CallOverrides): Promise<string>;

  mintLoot(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintLoot(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLootPaused(
    paused: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLootPaused(bool)"(
    paused: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    burnLoot(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burnLoot(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lootPaused(overrides?: CallOverrides): Promise<boolean>;

    "lootPaused()"(overrides?: CallOverrides): Promise<boolean>;

    lootToken(overrides?: CallOverrides): Promise<string>;

    "lootToken()"(overrides?: CallOverrides): Promise<string>;

    mintLoot(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintLoot(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLootPaused(paused: boolean, overrides?: CallOverrides): Promise<void>;

    "setLootPaused(bool)"(
      paused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    burnLoot(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burnLoot(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lootPaused(overrides?: CallOverrides): Promise<BigNumber>;

    "lootPaused()"(overrides?: CallOverrides): Promise<BigNumber>;

    lootToken(overrides?: CallOverrides): Promise<BigNumber>;

    "lootToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintLoot(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintLoot(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLootPaused(paused: boolean, overrides?: Overrides): Promise<BigNumber>;

    "setLootPaused(bool)"(
      paused: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnLoot(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burnLoot(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lootPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lootPaused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lootToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lootToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintLoot(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintLoot(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLootPaused(
      paused: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLootPaused(bool)"(
      paused: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
