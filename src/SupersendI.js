interface ISuprSendInbox {
    workspaceKey: string
    distinctId: string | null
    subscriberId: string | null
    tenantId?: string
    stores?: IStore[]
    pageSize?: number
    pagination?: boolean
    ...
  }