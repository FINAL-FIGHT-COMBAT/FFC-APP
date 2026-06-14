import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

type A4PageProps = {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  pageNumber?: number;
};

export function A4Page({ children, headerContent, footerContent, pageNumber }: A4PageProps) {
  return (
    <>
      <style type="text/css" media="print">
        {`
          @page { 
            size: A4 portrait; 
            margin: 1cm 2cm 1cm 3cm; /* Top 1cm (Logo), Right 2cm, Bottom 1cm (Footer), Left 3cm */
          }
          body { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
            font-family: "Arial", sans-serif !important;
          }
        `}
      </style>
      <Paper
        elevation={12}
        sx={{
          width: '210mm',
          minHeight: '297mm',
          flexShrink: 0,
          mx: 'auto',
          mb: 6,
          bgcolor: '#FFFFFF',
          borderRadius: 0,
          boxSizing: 'border-box',
          p: '3cm 2cm 2cm 3cm', // ABNT Margins for screen reading
          fontFamily: '"Arial", "Helvetica", sans-serif',
          position: 'relative',
          '@media print': {
            boxShadow: 'none',
            mb: 0,
            p: 0, // Padding handled by @page margins in the parent
            width: '100%',
            minHeight: 'auto',
          }
        }}
      >
        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            borderSpacing: 0,
          }}
        >
          {/* REPEATING HEADER */}
          <Box
            component="thead"
            sx={{
              display: 'table-header-group',
            }}
          >
            <Box component="tr">
              <Box component="td" sx={{ pb: 3 }}>
                {headerContent}
              </Box>
            </Box>
          </Box>

          {/* MAIN CONTENT */}
          <Box component="tbody">
            <Box component="tr">
              <Box component="td" sx={{ pb: 4, pt: 3 }}>
                {children}
              </Box>
            </Box>
          </Box>

          {/* REPEATING FOOTER RESERVES SPACE */}
          <Box
            component="tfoot"
            sx={{
              display: 'table-footer-group',
              '@media print': {
                visibility: 'hidden',
              }
            }}
          >
            <Box component="tr">
              <Box component="td">
                {footerContent}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ACTUAL FIXED FOOTER (ONLY VISIBLE ON PRINT) */}
        <Box
          sx={{
            display: 'none',
            '@media print': {
              display: 'block',
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
            }
          }}
        >
          {footerContent}
        </Box>
      </Paper>
    </>
  );
}
