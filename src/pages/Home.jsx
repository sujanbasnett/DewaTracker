import MainContainer from "../components/Containers/MainContainer";
import Searchbar from "../components/homeComponents/Searchbar";
import { Title } from "../components/Titles/Titles";
import CategoryCard from "../components/Cards/CategoryCard";
import TransactionCard from "../components/Cards/TransactionCard";

import styles from "../styles/homeComponents/Home.module.scss"


const Home = () => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        {/* SEARCHBAR */}
        <div className={styles.Searchbar}>
          <Searchbar></Searchbar>
        </div>

        {/* CATEGORIES */}
      <div className={styles.categories}>
        <Title>Categories Last 30 Days</Title>
        <div className={styles.content}>
          <CategoryCard category="Products" money="10k"/>
          <CategoryCard category="Entertainment" money="40k"/>
          <CategoryCard category="Bills" money="20k"/>
          <CategoryCard category="Other" money="50k"/>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className={styles.transactions}>
        <Title>Latest Transactions</Title>
        <div className={styles.content}>
          <TransactionCard />
          <TransactionCard/>
          <TransactionCard/>
        </div>
      </div>


      </div>
    </MainContainer>
  )
}

export default Home