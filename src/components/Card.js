import { Card, CardBody, Stack, Text, Flex, Icon, Avatar, AvatarBadge } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { Checkbox } from '@chakra-ui/react'

export default function KbCard({ cardData, userData, avatar }) {
  const user = userData.find((user) => user.id === cardData.userId);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bg="white"
      w="100%"
      mb={3}
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      borderRadius="md" // Rounded corners
    >
      <CardBody p={4}>
        <Stack spacing={2}>
          <Flex justify={"space-between"} fontSize={{ base: "10px", sm: "12px" }} color="gray.600">
            <div>{cardData.id}</div>
            <div>
              {avatar ? (
                <Avatar name={user.name} w={5} mr={2} h={5} size={"xs"}>
                  {user.available ? (
                    <AvatarBadge boxSize="1em" bg="yellow.400" />
                  ) : (
                    <AvatarBadge boxSize="1em" bg="gray.400" />
                  )}
                </Avatar>
              ) : (
                ""
              )}
            </div>
          </Flex>
          <Checkbox>
          <Text fontSize={{ base: "13px", sm: "15px" }} align={"left"} fontWeight={"500"} color="gray.700">
            {cardData.title}
          </Text>
          </Checkbox> 
          
          <Flex flexWrap="wrap" alignItems={"center"}>
            <SmallAddIcon
              border="1px"
              borderColor="gray.100"
              borderWidth={1}
              w={6}
              h={"22px"}
              p={"3px"}
              borderRadius={4}
              color="gray.400"
            ></SmallAddIcon>
            {cardData.tag.map((item) => (
              <Flex
                align={"left"}
                border="1px"
                borderColor="white"
                borderWidth={1}
                borderRadius={5}
                ml={2}
                px={1}
                alignItems={"center"}
                h="22px"
                alignSelf={"center"}
                color="gray.600"
              >
                <Icon
                  viewBox="0 0 200 200"
                  color="gray.400"
                  w={{ base: "2", sm: "3" }}
                  mr={1}
                  alignItems={"center"}
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Flex>
                  <Text fontSize={{ base: "12px", sm: "14px" }}>
                    {item}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}
