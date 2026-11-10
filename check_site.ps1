try {
    $response = Invoke-WebRequest -Uri 'https://ozon-finds-worker.dlypo.workers.dev/' -TimeoutSec 15 -UseBasicParsing
    Write-Output 'Status: ' + $response.StatusCode
    $content = $response.Content
    if ($content.Length -gt 0) {
        $len = [Math]::Min(500, $content.Length)
        Write-Output $content.Substring(0, $len)
    }
} catch {
    Write-Output 'Error: ' + $_.Exception.Message
}