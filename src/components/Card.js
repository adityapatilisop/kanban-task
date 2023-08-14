import { Card, CardBody, Stack, Text, Flex, Icon, Avatar, AvatarBadge } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

export default function KbCard({ cardData, userData, avatar }) {
  const user = userData.find((user) => user.id === cardData.userId);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="100%"
      mb={3}
    >
      <CardBody p={2}>
        <Stack spacing={1}>
          <Flex justify={"space-between"} fontSize={{ base: "10px", sm: "12px" }} color="gray">
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
          <Text fontSize={{ base: "13px", sm: "15px" }} align={"left"} fontWeight={"500"}>
            {cardData.title}
          </Text>
          <Flex flexWrap="wrap" alignItems={"center"}>
            <SettingsIcon
              border="1px"
              borderColor="gray.200"
              borderWidth={1}
              w={6}
              h={"22px"}
              p={"3px"}
              borderRadius={3}
            ></SettingsIcon>
            {cardData.tag.map((item) => (
              <Flex
                align={"left"}
                border="1px"
                borderColor="gray.200"
                borderWidth={1}
                borderRadius={5}
                ml={2}
                px={1}
                alignItems={"center"}
                h="22px"
                alignSelf={"center"}
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
                  <Text fontSize={{ base: "12px", sm: "14px" }} color="gray.600">
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
