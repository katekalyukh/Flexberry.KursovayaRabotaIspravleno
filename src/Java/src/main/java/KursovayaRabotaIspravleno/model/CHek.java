package KursovayaRabotaIspravleno.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursovayaRabotaIspravleno.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Чек
 */
@Entity(name = "IISKursovayaRabotaIspravlenoЧек")
@Table(schema = "public", name = "Чек")
public class CHek {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВремяОплаты")
    private String времяоплаты;

    @Column(name = "Сумма")
    private Integer сумма;

    @Column(name = "ДатаОплаты")
    private Date датаоплаты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;


    public CHek() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВремяОплаты() {
      return времяоплаты;
    }

    public void setВремяОплаты(String времяоплаты) {
      this.времяоплаты = времяоплаты;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }

    public Date getДатаОплаты() {
      return датаоплаты;
    }

    public void setДатаОплаты(Date датаоплаты) {
      this.датаоплаты = датаоплаты;
    }


}