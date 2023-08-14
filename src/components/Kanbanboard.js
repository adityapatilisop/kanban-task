import KbCard from "../components/Card";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Icons from "./Icons";

const priorityLabels = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const priorityColumns = ["0", "1", "2", "3", "4"];
const statusColumns = ["Todo", "In progress", "Backlog", "Done", "Canceled"];

export default function Board({ sortedGroups, users, selectedGrouping }) {
  if (selectedGrouping === "status" || selectedGrouping === "priority") {
    const myArr =
      selectedGrouping === "status" ? statusColumns : priorityColumns;
    return (
      <Flex bg={"gray.50"} direction={{ base: "column", md: "row" }}>
        {myArr.map((column) => (
          <Stack key={column} m={3} w={{ base: "100%", sm: "88vw", md: 350 }}>
            <Flex justify={"space-between"} alignItems={"center"}>
              <Flex alignItems={"center"}>
                <Icons groupKey={column} userData={users} />
                <Text
                  fontWeight={500}
                  fontSize={{ base: "12px", md: "13px" }}
                  textAlign={"left"}
                  mr={"2"}
                >
                  {selectedGrouping === "status"
                    ? column
                    : priorityLabels[column]}
                </Text>
                <Text fontSize={{ base: "12px", md: "13px" }} color={"gray.500"}>
                  {
                    sortedGroups.find(
                      (group) => group.groupKey === column
                    )?.items.length
                  }
                </Text>
              </Flex>
              <AddIcon w={3} />
            </Flex>
            {sortedGroups
              .find((group) => group.groupKey === column)
              ?.items.map((item) => (
                <KbCard
                  key={item.id}
                  cardData={item}
                  userData={users}
                  avatar={true}
                />
              ))}
          </Stack>
        ))}
      </Flex>
    );
  } else {
    return (
      <Flex bg={"gray.50"} direction={{ base: "column", md: "row" }}>
        {sortedGroups.map(({ groupKey, items }) => (
          <Stack key={groupKey} m={3} w={{ base: "100%", sm: "88vw", md: 350 }}>
            <Flex justify={"space-between"} alignItems={"center"}>
              <Flex alignItems={"center"}>
                <Icons groupKey={groupKey} userData={users} />
                <Text
                  fontWeight={500}
                  fontSize={{ base: "12px", md: "13px" }}
                  textAlign={"left"}
                  mr={"2"}
                >
                  {groupKey}
                </Text>
                <Text fontSize={{ base: "12px", md: "13px" }}>{items.length}</Text>
              </Flex>
              <AddIcon w={3} />
            </Flex>
            {items.map((item) => (
              <KbCard
                key={item.id}
                cardData={item}
                userData={users}
                avatar={false}
              />
            ))}
          </Stack>
        ))}
      </Flex>
    );
  }
}
