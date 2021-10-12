import { Box, Button, Icon, IconWrapper, Text, Wrapper } from "./styled";

export const ThemeSwitch = () => {

    return (
        <Wrapper>
            <Button>
                <Text>Dark mode </Text>
                <Box>
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};