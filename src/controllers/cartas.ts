import cards from '../models/cards';
import { Response, Request } from 'express';
import * as lotteryHelper from '../util/lotteryHelper';

const { lotteryXElementsInArray } = lotteryHelper;

export const index = (req: Request, res: Response) => res.send(cards);

export const random = (req: Request, res: Response) => res.send(lotteryXElementsInArray(2, cards));
