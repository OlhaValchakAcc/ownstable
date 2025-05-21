import {useEffect, useState} from 'react'
import {api} from './api.service'

const AUTH_URL = process.env.REACT_APP_AUTH_URL || ''
const REPORT_URL = process.env.REACT_APP_REPORT_URL || ''

const credentials = {
  EmailAddress: process.env.REACT_APP_API_USER_EMAIL,
  Password: process.env.REACT_APP_API_USER_PASSWORD,
  IPAddress: null,
}

interface AuthResponse {
  SessionId: string
  OrgId: string
}

interface SummaryLocationResponse {
  LocationName: string
  LineItems: Array<{
    FeeCode: string
    FeeName: string
    NumberOfInvoices: number
    NetAmount: number
    PlatformMargin: number
    TrainerMargin: number
    GST: number
    GrossAmount: number
    PercentageOfTotal: number
  }>
}

export const useSummaryByLocationData = () => {
  const [data, setData] = useState<SummaryLocationResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Authenticate
        const auth = await api.post<AuthResponse, typeof credentials>(AUTH_URL, credentials)

        // Step 2: Get report data
        console.log('SessionId', auth.data.SessionId);
        const url = `${REPORT_URL}?invoiceType=O&DateCreated=2025-05-01&DateDue=2025-05-30&isPaid=0`
        const report = await api.get<{ SummaryByLocation: SummaryLocationResponse[] }>(url, {
          headers: {
            SessionId: auth.data.SessionId || '3CE0314E-C8CA-4829-868A-C562FD0C726F',
            OrgId: auth.data.OrgId || '1',
          },
        })

        console.log('report', report);
        setData(report.data.SummaryByLocation)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {data, loading, error}
}
