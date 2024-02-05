import GenericEmail from '@/components/generic/generic-email'
import type { NextApiRequest, NextApiResponse } from 'next'
import ContentstackService from '../../helpers/contentstack';
import { useMemo } from 'react';

type ResponseData = {
    body: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    let id = req.query.id as string;
    const contentstackService = new ContentstackService();
    let payload : any = await contentstackService.getEmail(id, "en-us", "generic_email_template");
    let email = GenericEmail({
        modularBlocks: payload[0].modular_blocks,
        asRaw: true
    });
    res.status(200).json({ body: email.props.children })
}