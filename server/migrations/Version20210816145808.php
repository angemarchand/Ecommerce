<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210816145808 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE basket_products DROP FOREIGN KEY FK_D715558A1BE1FB52');
        $this->addSql('CREATE TABLE cart (id INT AUTO_INCREMENT NOT NULL, products_id INT NOT NULL, users_id INT NOT NULL, quantity INT NOT NULL, INDEX IDX_BA388B76C8A81A9 (products_id), INDEX IDX_BA388B767B3B43D (users_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cart ADD CONSTRAINT FK_BA388B76C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE cart ADD CONSTRAINT FK_BA388B767B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('DROP TABLE basket');
        $this->addSql('DROP TABLE basket_products');
        $this->addSql('ALTER TABLE pictures CHANGE image_b64 image_b64 LONGTEXT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE basket (id INT AUTO_INCREMENT NOT NULL, users_id INT NOT NULL, quantity INT NOT NULL, UNIQUE INDEX UNIQ_2246507B67B3B43D (users_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE basket_products (basket_id INT NOT NULL, products_id INT NOT NULL, INDEX IDX_D715558A6C8A81A9 (products_id), INDEX IDX_D715558A1BE1FB52 (basket_id), PRIMARY KEY(basket_id, products_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE basket ADD CONSTRAINT FK_2246507B67B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE basket_products ADD CONSTRAINT FK_D715558A1BE1FB52 FOREIGN KEY (basket_id) REFERENCES basket (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE basket_products ADD CONSTRAINT FK_D715558A6C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE cart');
        $this->addSql('ALTER TABLE pictures CHANGE image_b64 image_b64 LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
