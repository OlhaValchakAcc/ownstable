export type LineItem = {
  FeeCode: string
  FeeName: string
  NumberOfInvoices: number
  NetAmount: number
  PlatformMargin: number
  TrainerMargin: number
  GST: number
  GrossAmount: number
  PercentageOfTotal: number
}

export type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never
}[keyof T]

export type MetricKey = NumericKeys<LineItem>

export const metrics: Record<string, MetricKey> = {
  Invoices: 'NumberOfInvoices',
  Net: 'NetAmount',
  Platform: 'PlatformMargin',
  Trainer: 'TrainerMargin',
  GST: 'GST',
  Gross: 'GrossAmount',
  Percent: 'PercentageOfTotal',
}

export const metricLabels: Record<keyof typeof metrics, string> = {
  Invoices: 'Number of Invoices by Location',
  Net: 'Net Amount by Location',
  Platform: 'Platform Margin by Location',
  Trainer: 'Trainer Margin by Location',
  GST: 'GST by Location',
  Gross: 'Gross Amount by Location',
  Percent: 'Percentage of Total by Location',
}
