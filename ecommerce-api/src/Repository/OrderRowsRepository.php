<?php

namespace App\Repository;

use App\Entity\OrderRows;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderRows>
 *
 * @method OrderRows|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderRows|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderRows[]    findAll()
 * @method OrderRows[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRowsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderRows::class);
    }

//    /**
//     * @return OrderRows[] Returns an array of OrderRows objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('o.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?OrderRows
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
