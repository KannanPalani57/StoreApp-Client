import React from 'react';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }),
)(Badge);



export default function Cart() {
    return (
        <IconButton href="/cartview" aria-label="cart" >
            <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}