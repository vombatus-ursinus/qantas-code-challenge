import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import { Airport } from '../types/airport';
import { AirportListCard } from './AirportListCard';
import React from 'react';
import cn from 'classnames';

interface AirportListProps {
    airports: Airport[];
    onSelect: (airportId: string) => void;
}

const CARD_HEIGHT = 83;

export const AirportList: React.FC<AirportListProps> = ({ airports, onSelect }) => {
    return (
        <div>
            <div className={cn("airport-list-card", "airport-list-header")}>
                <h3 className="airport-list-title">Airport List</h3>
            </div>
            <List
                height={window.innerHeight}
                itemCount={airports.length}
                itemSize={CARD_HEIGHT}
                width="100%"
            >
                {({ index, style }: ListChildComponentProps) => (
                    <div style={style}>
                        <AirportListCard
                            key={airports[index].airportCode}
                            airport={airports[index]}
                            onClick={onSelect}
                        />
                    </div>
                )}
            </List>
        </div>
    );
};