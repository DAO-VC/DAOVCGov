
//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

interface iCheckpoint {

    struct Checkpoint {
        uint32 fromTimeStamp;
        uint256 votes;
    }

}