// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import "../src/TicketTracker.sol";

contract TicketTrackerScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        TicketTracker machine = new TicketTracker("SOMEEVENT", "SEV");
        console2.log("machine address is: ", address(machine));
        console2.log("owner is: ", address(machine.owner()));

        machine.addOccation(
            "UFC Miami",
            3*10**18,
            0,
            "May 31",
            "6:00PM EST",
            "Miami-Dade Arena - Miami, FL"
        );

        machine.addOccation(
            "ETH Tokyo",
            1*10**18,
            125,
            "Jun 2",
            "1:00PM JST",
            "Tokyo, Japan"
        );

        machine.addOccation(
            "ETH Privacy Hackathon",
            25*10**16,
            200,
            "Jun 9",
            "10:00AM TRT",
            "Turkey, Istanbul"
        );

        machine.addOccation(
            "Dallas Mavericks vs. San Antonio Spurs",
            5*10**18,
            50,
            "Jun 11",
            "2:30PM CST",
            "American Airlines Center - Dallas, TX"
        );

        machine.addOccation(
            "ETH Global Toronto",
            15*10**17,
            125,
            "Jun 23",
            "11:00AM EST",
            "Toronto, Canada"
        );


        console2.log("number of occasions:", machine.totalOccasions());

        vm.stopBroadcast();
    }
}
