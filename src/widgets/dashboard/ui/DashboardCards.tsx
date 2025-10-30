import Box from "@mui/material/Box";              
import DashCard from "@/shared/ui/Card/DashCard";
import Dollar from "@/shared/ui/Icons/Dollar";
import CardIcon from "@/shared/ui/Icons/CardIcon";
import User from "@/shared/ui/Icons/User"
import TrendUpIcon from "@/shared/ui/Icons/TrendUp";

export default function DashboardCards() {
  // Общие стили для Box, который оборачивает каждую карточку
  const cardWrapperStyles = {
    // Flex-элемент для 1/4 ширины на md и выше, с учетом spacing (gap)
    flex: '0 0 calc(25% - 16px)', // 25% ширины минус половина gap с каждой стороны
    maxWidth: 'calc(25% - 16px)',
    
    // Адаптивность для sm (2 колонки)
    '@media (max-width: 900px)': {
      flex: '0 0 calc(50% - 16px)',
      maxWidth: 'calc(50% - 16px)',
    },
    
    // Адаптивность для xs (1 колонка)
    '@media (max-width: 600px)': {
      flex: '0 0 100%',
      maxWidth: '100%',
    },

  
    height: '100%',
    display: 'flex', 
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'stretch', 
      }}
    >

      <Box sx={cardWrapperStyles}> 
        <DashCard
          title="Total Revenue"
          value="$4,523,189.87"
          description="+20.1% from last month"
          icon={Dollar}
        />
      </Box>


      <Box sx={cardWrapperStyles}>
        <DashCard
          title="New Clients"
          value="+2,350"
          description="+180.1% from last month"
          icon={User}
        />
      </Box>

   
      <Box sx={cardWrapperStyles}>
        <DashCard
          title="Transactions"
          value="+12,234"
          description="+19% from last month"
          icon={CardIcon}
        />
      </Box>


      <Box sx={cardWrapperStyles}>
        <DashCard
          title="Success Rate"
          value="99.2%"
          description="+0.2% from last month"
          icon={TrendUpIcon}
        />
      </Box>
    </Box>
  );
}