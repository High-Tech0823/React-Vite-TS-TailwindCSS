import React from 'react';
import { IconProps } from '../../types';

export const SearchIcon: React.FC<IconProps> = ({ size = 16, color }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FlagIcon: React.FC<IconProps> = ({ size = 24, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={size} height={size} color={color} viewBox="0 0 24 24"><path fill="currentColor" d="M19 4H6V2H4v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 9H6V6h12z"></path></svg>
    )
}

export const MarketsIcon: React.FC<IconProps> = ({ size = 24, color }) => {
    return (
        <svg className="items-center" stroke="currentColor" fill="currentColor" strokeWidth="0" color={color} viewBox="0 0 16 16" width={size} height={size} ><path d="M1 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zM1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zM1 12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"></path></svg>
    )
}

export const ActivityIcon: React.FC<IconProps> = ({ size = 24, color}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={size} height={size} color={color} viewBox="0 0 24 24"><path fill="currentColor" d="M16.97 4.757a.999.999 0 0 0-1.918-.073l-3.186 9.554l-2.952-6.644a1.002 1.002 0 0 0-1.843.034L5.323 12H2v2h3.323c.823 0 1.552-.494 1.856-1.257l.869-2.172l3.037 6.835c.162.363.521.594.915.594l.048-.001a.998.998 0 0 0 .9-.683l2.914-8.742l.979 3.911A1.995 1.995 0 0 0 18.781 14H22v-2h-3.22z"></path></svg>
    )
}